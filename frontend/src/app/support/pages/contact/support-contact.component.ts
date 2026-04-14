import { Component, Input } from '@angular/core';

export interface ContactEntry {
  nameKey: string;
  roleKey: string;
  email: string;
}

@Component({
  selector: 'app-support-contact',
  templateUrl: './support-contact.component.html',
  styleUrls: ['./support-contact.component.scss']
})
export class SupportContactComponent {
  @Input() isAdmin: boolean | null = false;

  // Static contact list from i18n.
  // TODO: replace with editable backend-stored contacts when persistence is established.
  contacts: ContactEntry[] = [
    { nameKey: 'contact-1', roleKey: 'contact-1', email: 'support@example.com' }
  ];

  editContacts(): void {
    console.warn('TODO: edit contacts — persistence not yet implemented');
  }
}
