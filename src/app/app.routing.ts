import { Routes, RouterModule } from '@angular/router';

import { EvaluationWizardComponent }  from './evaluation-wizard/evaluation-wizard.component';

const appRoutes: Routes = [
  	{
  		path: '',
  		redirectTo: "/wizard",
  		pathMatch:"full"
    },{
      path: 'wizard',
      component: EvaluationWizardComponent
    }
];

export const Routing = RouterModule.forRoot(appRoutes);