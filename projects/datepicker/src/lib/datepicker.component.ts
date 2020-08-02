import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { BsLocaleService } from "ngx-bootstrap/datepicker";

@Component({
  selector: "ui-datepicker",
  template: `
    Datum auswählen: <br />
    <div class="row">
      <div class="col-xs-12 col-12 col-md-4 form-group">
        <input
          type="text"
          placeholder="Datepicker"
          class="form-control"
          bsDatepicker
          [bsConfig]="{
            dateInputFormat: 'DD.MM.YYYY',
            containerClass: 'theme-blue'
          }"
          (bsValueChange)="onValueChange($event)"
        />
      </div>
      <div class="col-xs-12 col-12 col-md-4 form-group">
        <input
          type="text"
          placeholder="Daterangepicker"
          class="form-control"
          bsDaterangepicker
          [bsConfig]="{
            rangeInputFormat : 'DD.MM.YYYY',
            dateInputFormat: 'DD.MM.YYYY',
            containerClass: 'theme-red'
          }"
          (bsValueChange)="onValueChange($event)"
        />
      </div>
    </div>
  `,
  styleUrls: [],
})
export class DatepickerComponent implements OnInit {


  // tslint:disable-next-line: no-output-on-prefix
  @Output() onValueChangeDate: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onValueChange(date: Date) {
    this.onValueChangeDate.emit(date);
  }
}
