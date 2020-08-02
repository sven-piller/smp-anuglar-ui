import { NgModule } from "@angular/core";
import { DatepickerComponent } from "./datepicker.component";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
defineLocale('de', deLocale);

@NgModule({
  declarations: [DatepickerComponent],
  imports: [BrowserAnimationsModule, BsDatepickerModule.forRoot()],
  exports: [DatepickerComponent],
})
export class DatepickerModule {}
