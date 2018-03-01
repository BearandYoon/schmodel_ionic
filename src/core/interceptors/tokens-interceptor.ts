import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserStorageService } from '../storage/storage.service';
import { environment } from '../environment';

@Injectable()
export class TokensInterceptor implements HttpInterceptor {

    constructor(private storage: UserStorageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.storage.get();

        if (authToken) {
          const authTokenHeader = {};
          authTokenHeader[environment.AUTH_TOKEN] = authToken;
            request = request.clone({
                setHeaders: authTokenHeader
            });
        }

        return next.handle(request);
    }
}
