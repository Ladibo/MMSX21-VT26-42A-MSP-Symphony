import { Component, Input } from '@angular/core';

export interface ChangelogEntry {
  version: string;
  date: string;
  titleKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-support-changelog',
  templateUrl: './support-changelog.component.html',
  styleUrls: ['./support-changelog.component.scss']
})
export class SupportChangelogComponent {
  @Input() isAdmin: boolean | null = false;

  // Static entries keyed into support.changelog.entries.<version>.title / .description.
  // TODO: replace with backend-fetched entries (or GitHub releases API) when
  // persistence is established.
  entries: ChangelogEntry[] = [
    { version: '2.0.0', date: '2025-01-01', titleKey: 'entry-2-0-0', descriptionKey: 'entry-2-0-0' },
    { version: '1.5.0', date: '2024-06-01', titleKey: 'entry-1-5-0', descriptionKey: 'entry-1-5-0' }
  ];

  addEntry(): void {}
}
