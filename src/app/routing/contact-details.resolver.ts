import { Resolve } from '@angular/router';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

import { DataReaderService, ContactDetail} from '../firebase';
import { StoreService } from '../store';

export class ContactDetailResolver implements Resolve<ContactDetail> {

    constructor(store: StoreService, data: DataReaderService) {
        
    }

    resolve(): Observable<ContactDetail> {
        return undefined;
    }

}