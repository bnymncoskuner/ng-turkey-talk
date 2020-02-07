import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss']
})
export class DynamicCompComponent implements OnInit {

  constructor(@Inject('myData') public myData) { }

  ngOnInit(): void {
  }

}
