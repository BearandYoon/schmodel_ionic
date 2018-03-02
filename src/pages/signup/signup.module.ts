import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupPage } from './signup';
import { ValidationService } from '../../core/services/validation.service';
import { AuthService } from '../../core/services/auth.service';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    ValidationService
  ]
})
export class SignupPageModule {}
