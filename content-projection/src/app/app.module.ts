import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, MyBrandComponent } from './app.component';
import { PanelModule } from './components/panel/panel.module';
import { TableModule } from './components/table/table.module';

@NgModule({
  declarations: [
    AppComponent, MyBrandComponent
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
