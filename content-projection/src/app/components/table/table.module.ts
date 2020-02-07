import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, TableColumnComponent } from './table.component';

const exported = [
  TableColumnComponent, TableComponent
];

@NgModule({
  declarations: [exported],
  imports: [
    CommonModule
  ],
  exports: [exported]
})
export class TableModule { }
