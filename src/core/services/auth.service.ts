import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiRoutingService } from '../api-routing.service';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private apiRoutingService: ApiRoutingService
  ) { }

  login(data) {
    return this.http.post(this.apiRoutingService.getLoginAPIUrl(), data, { observe: 'response' });
  }
}
