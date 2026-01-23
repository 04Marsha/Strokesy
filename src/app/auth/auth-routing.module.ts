import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { animation } from '@angular/animations';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { animation: 'Login' } },
  { path: 'signup', component: SignupComponent, data: { animation: 'Signup' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
