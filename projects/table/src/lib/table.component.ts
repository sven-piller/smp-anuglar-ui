import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-table',
  template: `
    <table>
      <thead class="ui-table-head">
        <tr>
          <th *ngFor="let head of headers">{{head}}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of data">
          <td *ngFor="let el of row">{{el}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    .ui-table-head {
        background-color: #000000;
        color: #ffffff;
    }
    th {
      width: 100px;
    }`,
  'td { text-align: center; }'
  ],
})
export class TableComponent implements OnInit {

  @Input() headers: string[];
  @Input() data: any[][];

  constructor() { }

  ngOnInit(): void {
  }

}
