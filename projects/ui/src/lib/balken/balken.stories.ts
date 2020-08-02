import { moduleMetadata } from "@storybook/angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { action } from "@storybook/addon-actions";
import { BalkenComponent } from "./balken.component";

export default {
  title: "UiBalken",
  excludeStories: /.*Data$/,
  component: BalkenComponent,
  decorators: [
    moduleMetadata({
      declarations: [BalkenComponent],
      imports: [BrowserAnimationsModule],
    }),
  ],
};

export const actionsData = {
  onPinBalken: action("onPinTask"),
  onArchiveBalken: action("onArchiveTask"),
};

export const balkenData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updated_at: new Date(2019, 0, 1, 9, 0),
};

export const Standard = () => ({
  component: BalkenComponent,
  props: {
    balken: balkenData,
  },
});

export const Archived = () => ({
  component: BalkenComponent,
  props: {
    balken: {
      ...balkenData,
      state: "TASK_ARCHIVED",
    },
  },
});

export const Pinned = () => ({
  component: BalkenComponent,
  props: {
    balken: {
      ...balkenData,
      state: "TASK_PINNED",
    },
  },
});

export const Unbekannt = () => ({
  component: BalkenComponent,
  props: {
    balken: {
      ...balkenData,
      state: null,
    },
  },
});
