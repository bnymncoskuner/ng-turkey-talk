import { Component } from '@angular/core';

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
