import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Phone } from '../../../core/phones/phone.entity';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

const DEFAULT_PHONE: Phone = {
  model: 'IPHONE',
  price: 199,
  core: 'APPLE',
  memory: '1Gb',
  camera: 'HD',
  screenSize: '1024*1024',
  rating: 5,
};

@Component({
  selector: 'app-table-ui',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input('phones') public phones: Phone[] = [];
  @Output('deletePhoneByIndex')
  public readonly deletePhoneByIndex = new EventEmitter<string>();
  @Output('savePhoneByIndex')
  public readonly savePhoneByIndex = new EventEmitter<{ phone: Phone, index: string }>();
  public phone: Phone = DEFAULT_PHONE;
  public productDialog: boolean = false;
  public submitted: boolean = false;
  public index = '';
  constructor(
    private readonly router: Router,
  ) {}

  public model = new FormControl('',  [Validators.required, Validators.minLength(2)]);
  public price = new FormControl(0,  [Validators.required]);
  public core = new FormControl('',  [Validators.required, Validators.minLength(2)]);
  public memory = new FormControl('',  [Validators.required, Validators.minLength(2)]);
  public screen = new FormControl('',  [Validators.required, Validators.minLength(2)]);
  public camera = new FormControl('',  [Validators.required, Validators.minLength(2)]);
  public rating = new FormControl(0,  [Validators.required, Validators.min(0), Validators.max(10)]);

  public openNew(): void {
    this.index = '';
    this.phone = DEFAULT_PHONE;
    this.initField();
    this.submitted = false;
    this.productDialog = true;
  }

  public editPhoneDescription(index: string): void {
    this.index = index;
    this.phone = this.phones[Number(index)]
    this.productDialog = true;
    this.initField()
  }

  public hideDialog(): void {
    this.productDialog = false;
    this.submitted = false;
  }

  public saveProduct(): void {
    this.phone = {
      model: this.model.value,
      price: this.price.value,
      core: this.core.value,
      memory: this.memory.value,
      screenSize: this.screen.value,
      camera: this.camera.value,
      rating: this.rating.value
    }
    this.savePhoneByIndex.emit({ phone: this.phone, index: this.index });
    this.productDialog = false;
    this.submitted = true;
  }

  public deletePhone(index: string): void {
    this.deletePhoneByIndex.emit(index);
  }

  public initField():void {
    this.model.setValue(this.phone.model)
    this.price.setValue(this.phone.price)
    this.core.setValue(this.phone.core)
    this.memory.setValue(this.phone.memory)
    this.screen.setValue(this.phone.screenSize)
    this.camera.setValue(this.phone.camera)
    this.rating.setValue(this.phone.rating)
  }

  public goToCharPage(): void{
    this.router.navigate(['/chart']);
  }
}
