import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Phone } from '../../../core/phones/phone.entity';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-details-ui',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent implements OnInit {
  public rating = new FormControl();
  @Input('phone') public phone!: Phone;
  @Output() public readonly ratingChange = this.rating.valueChanges as EventEmitter<string>;

  constructor(
    private readonly router: Router,
  ){}

  ngOnInit(): void {
    this.rating.setValue(this.phone.rating)
  }

  public goToTablePage(): void {
    this.router.navigate(['/table']);
  }

  public goToChartPage(): void {
    this.router.navigate(['/chart']);
  }
}
