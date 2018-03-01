import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { AuthService } from '../../core/services/auth.service';
import { UserStorageService } from '../../core/storage/storage.service';
import { ValidationService } from '../../core/services/validation.service';
import { ValidationMessage } from '../../core/constant';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: any;
  errorMsg = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storage: UserStorageService,
    private validationService: ValidationService
  ) {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ionViewCanEnter() {
    const authToken = this.storage.get();
    console.log(authToken);

    if (authToken) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  onSignIn() {
    if (!this.validationForm()) {
      return;
    }

    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe(response => {
        console.log('login response = ', response);
        this.navCtrl.setRoot(HomePage);
      })
  }

  showTermsAndConditions() {
    console.log('showTermsAndConditions');
  }

  validationForm() {
    this.errorMsg = '';
    if (this.validationService.emailValidator(this.loginForm.controls.email)) {
      this.loginForm.controls.email.setErrors({invalid: true});
      this.errorMsg = ValidationMessage.INVALID_EMAIL;
      return false;
    }

    if (this.loginForm.value.password.length < 6) {
      this.loginForm.controls.password.setErrors({invalid: true});
      this.errorMsg = ValidationMessage.INVALID_PASSWORD;
      return false;
    }

    if (this.validationService.passwordSpecialValidator(this.loginForm.controls.password)) {
      this.loginForm.controls.password.setErrors({invalid: true});
      this.errorMsg = ValidationMessage.INVALID_SPECIAL_PASSWORD;
      return false;
    }

    return true;
  }

  onChange() {
    this.errorMsg = '';
    this.loginForm.conrols.email.setErrors(null);
    this.loginForm.conrols.password.setErrors(null);
  }
}
