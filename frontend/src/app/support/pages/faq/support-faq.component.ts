import { Component, Input } from '@angular/core';

interface FaqItem {
  key: string;
  open: boolean;
}

@Component({
  selector: 'app-support-faq',
  templateUrl: './support-faq.component.html',
  styleUrls: ['./support-faq.component.scss']
})
export class SupportFaqComponent {
  @Input() isAdmin: boolean | null = false;

  // Items keyed into support.faq.items.<key>.question / .answer
  items: FaqItem[] = [
    { key: 'faq-1', open: false },
    { key: 'faq-2', open: false },
    { key: 'faq-3', open: false }
  ];

  toggle(item: FaqItem): void {
    item.open = !item.open;
  }

  // TODO: when persistence is established, open editor here.
  addItem(): void {
    console.warn('TODO: add FAQ item — persistence not yet implemented');
  }
}
