import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSignIn() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe(response => {
        console.log('login response = ', response);
      })
  }

  showTermsAndConditions() {
    console.log('showTermsAndConditions');
  }
}
