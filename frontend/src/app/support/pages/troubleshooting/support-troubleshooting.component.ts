import { Component, Input } from '@angular/core';

interface TroubleshootItem {
  key: string;
  open: boolean;
}

@Component({
  selector: 'app-support-troubleshooting',
  templateUrl: './support-troubleshooting.component.html',
  styleUrls: ['./support-troubleshooting.component.scss']
})
export class SupportTroubleshootingComponent {
  @Input() isAdmin: boolean | null = false;

  items: TroubleshootItem[] = [
    { key: 'item-1', open: false },
    { key: 'item-2', open: false }
  ];

  toggle(item: TroubleshootItem): void {
    item.open = !item.open;
  }

  addItem(): void {}
}
