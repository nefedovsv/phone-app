import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { PhonesProvider } from '../../../core/phones/phones.provider';
import { Phone } from '../../../core/phones/phone.entity';

@Component({
  selector: 'app-details',
  templateUrl: './details.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsContainer {
  public readonly phone$!: Observable<Phone | null>;

  constructor(
    private readonly phonesProvider: PhonesProvider,
  ) {
    this.phone$ = this.phonesProvider.currentPhone$
  }

  ratingChange(value: string){
    this.phonesProvider.changeRating(value)
  }
}
