import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { PhonesProvider } from '../../../core/phones/phones.provider';
import { Phone } from '../../../core/phones/phone.entity';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartContainer {
  public readonly phones$!: Observable<Phone[]>;

  constructor(
    private readonly phonesProvider: PhonesProvider,
  ) {
    this.phones$ = this.phonesProvider.phones$
  }
}
