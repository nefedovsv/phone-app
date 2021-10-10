import { Injectable, OnDestroy } from '@angular/core';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';

import { Phone } from './phone.entity';
import { map, shareReplay, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class PhonesState  implements OnDestroy {
  private readonly _destroy$ = new Subject<void>();
  private readonly _phones$: ReplaySubject<Phone[]>;
  private readonly _currentPhoneIndex$: ReplaySubject<string>;

  constructor() {
    this._phones$ = new ReplaySubject<Phone[]>(1);
    this._currentPhoneIndex$ = new ReplaySubject<string>(1);
  }

 public initState( phones: Phone[]): void {
    this._phones$.next(phones)
 }

  public get phones$(): Observable<Phone[]> {
    return this._phones$.asObservable();
  }

  public get currentPhoneIndex$(): Observable<string> {
    return this._currentPhoneIndex$.asObservable();
  }

  public get currentPhone$(): Observable<Phone> {
    return this.currentPhoneIndex$.pipe(
      switchMap((index) => this.getPhoneByIndex(index)),
      shareReplay(1)
    );
  }

  public setCurrentPhoneIndex(index: string): void {
    this._currentPhoneIndex$.next(index);
  }

  public getPhoneByIndex(index: string): Observable<Phone> {
    return this._phones$.pipe(
      map((phones) => phones[Number(index)]),
      shareReplay(1)
    );
  }

  public changeRating(value: string): void {
    combineLatest([this.phones$, this.currentPhoneIndex$])
      .pipe(takeUntil(this._destroy$))
      .subscribe(([phones, index]) =>
        phones.splice(Number(index), 1, {...phones[Number(index)], rating: Number(value)})
    )
  }

  public deletePhoneByIndex(index: string): void {
    this.phones$
      .pipe(takeUntil(this._destroy$))
      .subscribe((phones) =>
        phones.splice(Number(index), 1))
  }

  public savePhoneByIndex(phone: Phone, index: string): void {
    this.phones$
      .pipe(takeUntil(this._destroy$))
      .subscribe((phones) => {
        if(!index) {
          return phones.push(phone)
        }
        return phones.splice(Number(index), 1, phone);
      })
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

}
