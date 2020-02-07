import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent, TableColumnComponent, TableColumnBodyDirective, TableFootComponent } from './table.component';

const exported = [
  TableColumnComponent, TableComponent, TableColumnBodyDirective, TableFootComponent
];

@NgModule({
  declarations: [exported],
  imports: [
    CommonModule
  ],
  exports: [exported]
})
export class TableModule { }
