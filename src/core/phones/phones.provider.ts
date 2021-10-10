import { Inject, Injectable, OnDestroy } from '@angular/core';
import {
  Observable,
} from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  takeUntil,
} from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

import { Phone } from './phone.entity';
import { PHONES_GATEWAY, PhonesGateway } from './phones.gateway';
import { NavigationEnd, Router } from '@angular/router';
import { PhonesState } from './phones.state';

@Injectable({
  providedIn: 'root',
})
export class PhonesProvider implements OnDestroy {
  private readonly _destroy$ = new Subject<void>();

  constructor(
    @Inject(PHONES_GATEWAY) private readonly gateway: PhonesGateway,
    private readonly router: Router,
    private readonly phonesState: PhonesState,
  ) {
    this._init();
  }

  private _init(): void {
    this.gateway
      .getAllPhones()
      .pipe(takeUntil(this._destroy$))
      .subscribe((phones) => {
        this.phonesState.initState(phones);
      });

    this._currentUrl$.pipe(takeUntil(this._destroy$)).subscribe((url) => {
      const index = url.split('/')[2];
      this.phonesState.setCurrentPhoneIndex(index);
    });
  }

  private get _currentUrl$(): Observable<string> {
    return this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      filter((event) => event.url.includes('details/')),
      map((event) => event.url),
      distinctUntilChanged(),
    );
  }

  public get phones$(): Observable<Phone[]> {
    return this.phonesState.phones$;
  }

  public get currentPhone$(): Observable<Phone> {
    return this.phonesState.currentPhone$
  }

  public changeRating(value: string): void {
    return this.phonesState.changeRating(value);
  }

  public deletePhoneByIndex(index: string): void {
    return this.phonesState.deletePhoneByIndex(index);
  }

  public setCurrentPhoneIndex(index: string): void {
    return this.phonesState.setCurrentPhoneIndex(index);
  }

  public savePhoneByIndex(phone: Phone, index = ''): void {
    return this.phonesState.savePhoneByIndex(phone, index);
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
