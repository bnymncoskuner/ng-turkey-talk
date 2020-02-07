import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-table-column',
  template: ``
})
export class TableColumnComponent {
  @Input() field;
  @Input() header;
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
            {{row[column.field]}}
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
