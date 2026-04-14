import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

import { SupportComponent } from './support.component';
import { SupportManualComponent } from './pages/manual/support-manual.component';
import { SupportFaqComponent } from './pages/faq/support-faq.component';
import { SupportTroubleshootingComponent } from './pages/troubleshooting/support-troubleshooting.component';
import { SupportQuickGuideComponent } from './pages/quick-guide/support-quick-guide.component';
import { SupportChangelogComponent } from './pages/changelog/support-changelog.component';
import { SupportContactComponent } from './pages/contact/support-contact.component';

const routes: Routes = [
  { path: '', component: SupportComponent }
];

@NgModule({
  declarations: [
    SupportComponent,
    SupportManualComponent,
    SupportFaqComponent,
    SupportTroubleshootingComponent,
    SupportQuickGuideComponent,
    SupportChangelogComponent,
    SupportContactComponent
  ],
  imports: [SharedModule, RouterModule.forChild(routes)]
})
export class SupportModule {}
