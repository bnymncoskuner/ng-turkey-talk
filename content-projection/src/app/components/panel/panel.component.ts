import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
    <div class="panel">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
