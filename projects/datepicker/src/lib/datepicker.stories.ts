import { DatepickerComponent } from "./datepicker.component";
import { moduleMetadata } from "@storybook/angular";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { action } from '@storybook/addon-actions';

export default {
  title: "UiDatepicker",
  excludeStories: /.*Data$/,
  component: DatepickerComponent,
  decorators: [
    moduleMetadata({
      declarations: [DatepickerComponent],
      imports: [BrowserAnimationsModule, BsDatepickerModule.forRoot()],
    }),
  ],
};

export const actionsData = {
  onValueChange: action('onValueChange'),
};

export const Standard = () => ({
  component: DatepickerComponent,
  props: {
    onValueChange: actionsData.onValueChange,
  },
});
