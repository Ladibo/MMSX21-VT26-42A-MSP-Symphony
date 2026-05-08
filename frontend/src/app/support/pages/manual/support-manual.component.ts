import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-support-manual',
  templateUrl: './support-manual.component.html',
  styleUrls: ['./support-manual.component.scss']
})
export class SupportManualComponent implements OnInit, OnDestroy {
  @Input() isAdmin: boolean | null = false;

  content = '';
  editContent = '';
  editing = false;
  saving = false;
  error: string | null = null;

  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient, private translate: TranslateService) {}

  ngOnInit(): void {
    this.fetchManual(this.translate.currentLang);

    this.translate.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ lang }) => {
        this.editing = false;
        this.fetchManual(lang);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /** Called by (ready) on each <markdown> after render — adds heading ids so TOC links work. */
  addHeadingIds(container: HTMLElement): void {
    container.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
      (h as HTMLElement).id = this.pandocId(h.textContent?.trim() ?? '');
    });
  }

  /** Intercept #hash anchor clicks so Angular router doesn't navigate away. */
  onViewerClick(event: MouseEvent): void {
    const anchor = (event.target as HTMLElement).closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (href?.startsWith('#')) {
      event.preventDefault();
      document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  startEdit(): void {
    this.editContent = this.content;
    this.editing = true;
  }

  cancelEdit(): void {
    this.editing = false;
  }

  save(): void {
    this.saving = true;
    const lang = this.translate.currentLang;
    this.http
      .put(`/symphony-ws/service/support/manual?lang=${lang}`, this.editContent, {
        responseType: 'text' as 'json'
      })
      .subscribe({
        next: () => {
          this.content = this.editContent;
          this.editing = false;
          this.saving = false;
        },
        error: () => {
          this.saving = false;
          this.error = 'support.manual.save-error';
        }
      });
  }

  private fetchManual(lang: string): void {
    this.error = null;
    this.http
      .get(`/symphony-ws/service/support/manual?lang=${lang}`, { responseType: 'text' })
      .subscribe({
        next: md => {
          this.content = md;
          this.editContent = md;
        },
        error: () => { this.error = 'support.manual.load-error'; }
      });
  }

  private pandocId(text: string): string {
    return text
      .replace(/^\d+(\.\d+)*\.?\s+/, '')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }
}
