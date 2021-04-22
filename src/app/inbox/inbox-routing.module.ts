import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailShowComponent } from './email-show/email-show.component';

import { HomeComponent } from './home/home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailResolverService } from './email-resolver.service'
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent, children: [ 
      { path: '', component: PlaceholderComponent },
      { path: ':id', component: EmailShowComponent, resolve: {
        email: EmailResolverService
      } },
      {path: 'not-found', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule {}
