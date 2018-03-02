import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { AuthService } from '../../core/services/auth.service';
import { UserStorageService } from '../../core/storage/storage.service';
import { ValidationService } from '../../core/services/validation.service';
import { ValidationMessage } from '../../core/constant';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signUpForm: any;
  errorMsg = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storage: UserStorageService,
    private validationService: ValidationService
  ) {
    this.signUpForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirmPass': ['', Validators.required],
      'activationCode': ['']
    });
  }

  ionViewCanEnter() {
    const authToken = this.storage.get();
    console.log(authToken);

    if (authToken) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  onSignUp() {
    if (!this.validationForm()) {
      return;
    }

    console.log(this.signUpForm.value);
    this.authService.login(this.signUpForm.value)
      .subscribe(response => {
        console.log('login response = ', response);
        this.navCtrl.setRoot(HomePage);
      }, error => {
        this.errorMsg = ValidationMessage.INVALID_CREDENTIALS;
      });
  }

  showTermsAndConditions() {
    console.log('showTermsAndConditions');
  }

  validationForm() {
    this.errorMsg = '';
    if (this.validationService.emailValidator(this.signUpForm.controls.email)) {
      this.signUpForm.controls.email.setErrors({invalid: true});
      this.errorMsg = ValidationMessage.INVALID_EMAIL;
      return false;
    }

    if (this.signUpForm.value.password.length < 6) {
      this.signUpForm.controls.password.setErrors({invalid: true});
      this.errorMsg = ValidationMessage.INVALID_PASSWORD;
      return false;
    }

    if (this.validationService.passwordSpecialValidator(this.signUpForm.controls.password)) {
      this.signUpForm.controls.password.setErrors({invalid: true});
      this.errorMsg = ValidationMessage.INVALID_SPECIAL_PASSWORD;
      return false;
    }

    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPass) {
      this.signUpForm.controls.confirmPass.setErrors({invalid: true});
      this.errorMsg = ValidationMessage.NON_MATCHING_PASSWORD_SIGNUP;
      return false;
    }

    return true;
  }

  onChange() {
    this.errorMsg = '';
    this.signUpForm.controls.email.setErrors(null);
    this.signUpForm.controls.password.setErrors(null);
    this.signUpForm.controls.confirmPass.setErrors(null);
  }

  login() {
    this.navCtrl.push('LoginPage');
  }
}
