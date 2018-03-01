import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environment';
import { ApiRoutingService } from '../api-routing.service';
import { UserStorageService } from '../storage/storage.service';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private apiRoutingService: ApiRoutingService,
    private userStorage: UserStorageService
  ) { }

  login(data) {
    return this.http.post(this.apiRoutingService.getLoginAPIUrl(), data, { observe: 'response', responseType: 'text' })
      .do(res => {
        const authToken = res.headers.get(environment.AUTH_TOKEN);
        console.log('authToken = ', authToken);
        this.userStorage.save(authToken);
      })
  }
}
