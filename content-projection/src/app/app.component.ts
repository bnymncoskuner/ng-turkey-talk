import { Component } from '@angular/core';
import { TableColumnComponent } from './components/table/table.component';


@Component({
  selector: 'my-brand-column',
  template: ``,
  providers: [{
    provide: TableColumnComponent,
    useExisting: MyBrandComponent
  }]
})
export class MyBrandComponent extends TableColumnComponent {
  field = 'brand';
  header = 'Custom Marka';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'content-projection';

  phones = [{
    name: 'Iphone X',
    brand: 'Apple',
    price: 1000
  }, {
    name: 'Galaxy S10',
    brand: 'Samsung',
    price: 500
  }];
}
