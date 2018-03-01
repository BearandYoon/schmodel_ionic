import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/Subscription';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/first';

platformBrowserDynamic().bootstrapModule(AppModule);
