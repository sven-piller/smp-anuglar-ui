import { moduleMetadata } from "@storybook/angular";
import { CommonModule } from "@angular/common";
import { BalkenListComponent } from "./balken-list.component";
import { BalkenComponent } from "./balken.component";
import { balkenData, actionsData } from "./balken.stories";

export default {
  title: "UiBalkenList",
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      // imports both components to allow component composition with storybook
      declarations: [BalkenListComponent, BalkenComponent],
      imports: [CommonModule],
    }),
  ],
  parameters: {
    backgrounds: [
      { name: "original", value: "#26c6da", default: true },
      { name: "red", value: "#ff0000" },
      { name: "black", value: "#000000" },
      { name: "white", value: "#ffffff" },
    ],
  },
};

export const defaultTasksData = [
  { ...balkenData, id: "1", title: "Task 1" },
  { ...balkenData, id: "2", title: "Task 2" },
  { ...balkenData, id: "3", title: "Task 3" },
  { ...balkenData, id: "4", title: "Task 4" },
  { ...balkenData, id: "5", title: "Task 5" },
  { ...balkenData, id: "6", title: "Task 6" },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 4),
  { id: "5", title: "Task 5 (archived)", state: "TASK_ARCHIVED" },
  { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

// default TaskList state
export const Default = () => ({
  component: BalkenListComponent,
  template: `
    <div style="padding: 3rem">
      <lib-ui-balken-list [tasks]="tasks" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></lib-ui-balken-list>
    </div>
  `,
  props: {
    tasks: defaultTasksData,
    onPinTask: actionsData.onPinBalken,
    onArchiveTask: actionsData.onArchiveBalken,
  },
});

// tasklist with pinned tasks
export const WithPinnedTasks = () => ({
  component: BalkenListComponent,
  template: `
    <div style="padding: 3rem">
      <lib-ui-balken-list [tasks]="tasks" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></lib-ui-balken-list>
    </div>
  `,
  props: {
    tasks: withPinnedTasksData,
    onPinTask: actionsData.onPinBalken,
    onArchiveTask: actionsData.onArchiveBalken,
  },
});

// tasklist in loading state
export const Loading = () => ({
  template: `
    <div style="padding: 3rem">
      <lib-ui-balken-list [tasks]="[]" loading="true" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></lib-ui-balken-list>
    </div>
  `,
});

// tasklist no tasks
export const Empty = () => ({
  template: `
    <div style="padding: 3rem">
      <lib-ui-balken-list [tasks]="[]" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></lib-ui-balken-list>
    </div>
  `,
});
