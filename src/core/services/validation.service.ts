import { Injectable } from '@angular/core';

import { environment } from '../environment';
import { UserStorageService } from '../storage/storage.service';

@Injectable()
export class ValidationService {
  constructor(
    private userStorage: UserStorageService
  ) { }

  emailValidator(control) {
    const value = control.value.toLowerCase();
    // RFC 2822 compliant regex
    const result = value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    if (result && value && (result[0].length === value.length)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  passwordSpecialValidator(control) {
    if (control.value.match(/[^a-zA-Z0-9!£$%^&*()_\-=+{}[\]:@~#,.<>/?\\|]/)) {
      return true;
    } else {
      return null;
    }
  }
}
