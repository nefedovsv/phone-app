import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableContainer } from './table.container';
import { TableModule } from 'primeng/table';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    TableContainer,
    TableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    StyleClassModule,
    ButtonModule,
    ReactiveFormsModule,
    DialogModule,
    InputTextModule,
    BrowserAnimationsModule,
]
})
export class TableModuleUI { }
