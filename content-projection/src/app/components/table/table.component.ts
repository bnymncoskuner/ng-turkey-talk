import { Component, OnInit, Input, ContentChildren, QueryList, Directive, TemplateRef, ContentChild } from '@angular/core';


@Directive({ selector: '[column-body]' })
export class TableColumnBodyDirective {
  constructor(public template: TemplateRef<any>) { }
}

@Component({
  selector: 'app-table-column',
  template: ``
})
export class TableColumnComponent {
  @Input() field;
  @Input() header;

  @ContentChild(TableColumnBodyDirective) customBody: TableColumnBodyDirective;
}

@Component({
  selector: 'app-table',
  template: `
    <table border="1">
      <thead>
        <tr>
          <th *ngFor="let column of columns">
            {{column.header}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of data">
          <td *ngFor="let column of columns">
            <ng-container *ngIf="column.customBody; else defaultBody">
              <ng-container *ngTemplateOutlet="column.customBody.template; context: {$implicit: row}"></ng-container>
            </ng-container>
            <ng-template #defaultBody>
              {{row[column.field]}}
            </ng-template>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: any[];
  @ContentChildren(TableColumnComponent) columns: QueryList<TableColumnComponent>;

  constructor() { }

  ngOnInit(): void {
  }

}
