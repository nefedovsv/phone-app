import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Phone } from '../../../core/phones/phone.entity';
import { Router } from '@angular/router';

type TableData = {
  labels: string[]
  datasets: {
    label: string
    data: number[]
  }[]
}

@Component({
  selector: 'app-chart-ui',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit {
  @Input('phones') public phones: Phone[] = [];
  public data!: TableData

  constructor(
    private readonly router: Router,
  ) {}

  public ngOnInit(): void {
    this.data = {
      labels: this.phones.map(item => item.model),
      datasets: [
        {
          label: 'Phone rating',
          data: this.phones.map(item => item.rating)
        }
      ]
    }
  }

  public goToTablePage(): void {
    this.router.navigate(['/table']);
  }
}
