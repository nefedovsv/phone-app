import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhonesGateway } from '../../core/phones/phones.gateway';
import { Phone } from '../../core/phones/phone.entity';
import { phones } from './mock-data/phones-collection';

@Injectable()
export class HttpPhonesGateway implements PhonesGateway {

  public getAllPhones(): Observable<Phone[]> {
    // this place for real http request !!!
    return of(phones)
  }
}
