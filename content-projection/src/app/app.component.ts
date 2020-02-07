import { Component, ComponentFactoryResolver, ReflectiveInjector, EmbeddedViewRef, ApplicationRef } from '@angular/core';
import { TableColumnComponent } from './components/table/table.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';


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

  constructor(private cfr: ComponentFactoryResolver, private appRef: ApplicationRef) {
  }

  phones = [{
    name: 'Iphone X',
    brand: 'Apple',
    price: 1000
  }, {
    name: 'Galaxy S10',
    brand: 'Samsung',
    price: 500
  }];

  onClick() {
    const factory = this.cfr.resolveComponentFactory(DynamicCompComponent);
    const compRef = factory.create(ReflectiveInjector.resolveAndCreate([{
      provide: 'myData',
      useValue: 'test'
    }]));

    this.appRef.attachView(compRef.hostView);

    const el = (compRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
    document.body.appendChild(el);
  }
}
