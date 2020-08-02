import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "ui-table",
  template: `
    <table class="table table-striped table-hover">
      <caption>
        List of users
      </caption>
      <thead class="thead-dark">
        <tr>
          <th *ngFor="let head of headers" scope="col">{{ head }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of data">
          <td *ngFor="let el of row">{{ el }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: ["td, th { text-align: center; }"],
})
export class TableComponent implements OnInit {
  @Input() headers: string[];
  @Input() data: any[][];

  constructor() {}

  ngOnInit(): void {}
}
