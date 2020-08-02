import { moduleMetadata } from "@storybook/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { action } from "@storybook/addon-actions";
import { CardComponent } from "./card.component";

export default {
  title: "UiCard",
  excludeStories: /.*Data$/,
  component: CardComponent,
  decorators: [
    moduleMetadata({
      declarations: [CardComponent],
      imports: [BrowserAnimationsModule],
    }),
  ],
};

export const Standard = () => ({
  component: CardComponent,
  template: `
    <div style="padding: 3rem">
      <lib-ui-card></lib-ui-card>
    </div>
  `,
  props: {},
});
