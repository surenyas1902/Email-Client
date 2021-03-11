import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignInComponent} from './sign-in/sign-in.component';
import {SignupComponent} from './signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: '', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
