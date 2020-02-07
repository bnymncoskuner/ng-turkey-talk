import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent, PanelTitleComponent } from './panel.component';

const exportedComponents = [
  PanelTitleComponent, PanelComponent
];

@NgModule({
  declarations: [exportedComponents],
  imports: [
    CommonModule
  ],
  exports: [exportedComponents]
})
export class PanelModule { }
