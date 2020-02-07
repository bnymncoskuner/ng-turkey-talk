import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-panel-title',
  template: `
    <ng-content></ng-content>
  `
})
export class PanelTitleComponent { }


@Component({
  selector: 'app-panel',
  template: `
    <div class="panel">
      <ng-content select="app-panel-title"></ng-content>
      
      <hr *ngIf="title">
      
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @ContentChild(PanelTitleComponent) title: PanelTitleComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
