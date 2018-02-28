import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login';
import { AuthService } from '../../core/services/auth.service';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ]
})
export class LoginPageModule {}
