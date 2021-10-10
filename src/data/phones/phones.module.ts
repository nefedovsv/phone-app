import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PHONES_GATEWAY } from '../../core/phones/phones.gateway';
import { HttpPhonesGateway } from './phones.gateway';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: PHONES_GATEWAY,
      useClass: HttpPhonesGateway,
    },
  ],
})
export class PhonesDataModule {}
