import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { defineLocale } from "ngx-bootstrap/chronos";
import { deLocale } from "ngx-bootstrap/locale";
defineLocale("de", deLocale);

import { CardComponent } from "./card/card.component";
import { BalkenComponent } from "./balken/balken.component";
import { BalkenListComponent } from "./balken/balken-list.component";

@NgModule({
  declarations: [CardComponent, BalkenComponent, BalkenListComponent],
  imports: [BrowserAnimationsModule],
  exports: [CardComponent, BalkenComponent, BalkenListComponent],
})
export class UiModule {}
