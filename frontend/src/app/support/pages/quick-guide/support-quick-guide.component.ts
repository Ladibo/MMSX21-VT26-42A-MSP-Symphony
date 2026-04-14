import { Component, Input } from '@angular/core';

interface GuideStep {
  key: string;
}

@Component({
  selector: 'app-support-quick-guide',
  templateUrl: './support-quick-guide.component.html',
  styleUrls: ['./support-quick-guide.component.scss']
})
export class SupportQuickGuideComponent {
  @Input() isAdmin: boolean | null = false;

  steps: GuideStep[] = [
    { key: 'step-1' },
    { key: 'step-2' },
    { key: 'step-3' },
    { key: 'step-4' }
  ];

  editSteps(): void {
    console.warn('TODO: edit quick guide steps — persistence not yet implemented');
  }
}
