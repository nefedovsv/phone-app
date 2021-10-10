import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Phone } from './phone.entity';

export const PHONES_GATEWAY = new InjectionToken<PhonesGateway>(
  'phones-gateway'
);

export interface PhonesGateway {
  getAllPhones(): Observable<Phone[]>;
}
