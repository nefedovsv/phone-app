import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { PhonesProvider } from '../../../core/phones/phones.provider';
import { Phone } from '../../../core/phones/phone.entity';

@Component({
  selector: 'app-table',
  templateUrl: './table.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableContainer {
  public readonly phones$!: Observable<Phone[]>;

  constructor(
    private readonly phonesProvider: PhonesProvider,
  ) {
    this.phones$ = this.phonesProvider.phones$
  }

  public deletePhoneByIndex(index: string): void {
    this.phonesProvider.deletePhoneByIndex(index);
  }

  public savePhoneByIndex(event: { phone: Phone, index: string }): void {
    const { phone, index } = event;
    this.phonesProvider.savePhoneByIndex(phone, index);
  }
}
