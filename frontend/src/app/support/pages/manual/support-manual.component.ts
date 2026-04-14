import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-support-manual',
  templateUrl: './support-manual.component.html',
  styleUrls: ['./support-manual.component.scss']
})
export class SupportManualComponent {
  @Input() isAdmin: boolean | null = false;

  // TODO: when persistence is established, trigger file upload flow here.
  uploadManual(): void {
    console.warn('TODO: manual upload — persistence not yet implemented');
  }
}
