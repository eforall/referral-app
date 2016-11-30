import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

import { ReferralDetail} from '../firebase/referral';
import { DataReaderService } from '../firebase/data-reader.service';
import { StoreService } from '../store/store.service';

import { AppComponent } from '../components/app.component';

export class ReferralDetailResolver implements Resolve<ReferralDetail> {

    private reader: DataReaderService;
    private store: StoreService;
    
    constructor(/* private reader: DataReaderService, private store: StoreService */) {

        //
        // HACK: The dependencies are read from static variables on the AppComponent for now to
        // get around a known bug with the Angular Router.  This should be removed in favor of
        // regular DI when the router it is fixed.  https://github.com/angular/angular/issues/12995
        //
        this.reader = AppComponent._reader;
        this.store = AppComponent._store;
    }

    resolve(route: ActivatedRouteSnapshot): Observable<ReferralDetail> {
        let rid = route.params["rid"];
        this.reader.loadReferralDetail(rid);
        let x = this.store.select(store => store.referralDetails[rid]).filter(referralDetails => referralDetails !== undefined);

        /**
         * For some reason resolve() silently fails when directly passing out the observable from the store.
         * Wrapping it in a generic observable works, though. 
         */
        return new Observable<ReferralDetail>((observer) => {
            let x$ = x.subscribe(referralDetail => {
                observer.next(referralDetail);
                observer.complete();                
            });
        });

    }
}