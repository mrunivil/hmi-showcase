import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanComponent } from './scan/scan.component';
import { QuestionsComponent } from './questions/questions.component';
import { PredictionsComponent } from './predictions/predictions.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [{
  path: 'scan',
  component: ScanComponent
},
{
  path: 'questions',
  component: QuestionsComponent
},
{
  path: 'predictions',
  component: PredictionsComponent
},
{
  path: 'feedback',
  component: FeedbackComponent
},
{
  path: '',
  redirectTo: '/scan',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/scan'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
