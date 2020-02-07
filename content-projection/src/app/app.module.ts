import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, MyBrandComponent } from './app.component';
import { PanelModule } from './components/panel/panel.module';
import { TableModule } from './components/table/table.module';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';

@NgModule({
  declarations: [
    AppComponent, MyBrandComponent, DynamicCompComponent
  ],
  imports: [
    BrowserModule,
    PanelModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
