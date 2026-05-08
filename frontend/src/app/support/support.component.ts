import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '@src/app/app-reducer';
import { UserSelectors } from '@data/user';
import { IconType } from '@shared/icon/icon.component';

export type SupportPage =
  | 'manual'
  | 'faq'
  | 'troubleshooting'
  | 'quick-guide'
  | 'changelog'
  | 'contact';

interface NavItem {
  id: SupportPage;
  icon: IconType;
  labelKey: string;
}

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  isAdmin$: Observable<boolean>;
  activePage: SupportPage = 'manual';

  readonly navItems: NavItem[] = [
    { id: 'manual',          icon: 'open-folder', labelKey: 'support.nav.manual' },
    { id: 'faq',             icon: 'info-circle', labelKey: 'support.nav.faq' },
    { id: 'troubleshooting', icon: 'triangle',    labelKey: 'support.nav.troubleshooting' },
    { id: 'quick-guide',     icon: 'play-arrow',  labelKey: 'support.nav.quick-guide' },
    { id: 'changelog',       icon: 'report',      labelKey: 'support.nav.changelog' },
    { id: 'contact',         icon: 'user',        labelKey: 'support.nav.contact' }
  ];

  constructor(private store: Store<State>) {
    this.isAdmin$ = this.store.select(UserSelectors.selectIsAdmin);
  }

  selectPage(page: SupportPage): void {
    this.activePage = page;
  }
}
