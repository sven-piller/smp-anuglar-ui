import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Balken } from "./balken.model";

@Component({
  selector: "lib-ui-balken-list",
  template: `
    <div class="list-items">
      <lib-ui-balken
        *ngFor="let balken of tasksInOrder"
        [balken]="balken"
        (onArchiveBalken)="onArchiveTask.emit($event)"
        (onPinBalken)="onPinTask.emit($event)"
      >
      </lib-ui-balken>

      <div
        *ngIf="tasksInOrder.length === 0 && !loading"
        class="wrapper-message"
      >
        <span class="icon-check"></span>
        <div class="title-message">You have no tasks</div>
        <div class="subtitle-message">Sit back and relax</div>
      </div>

      <div *ngIf="loading">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  `,
})
export class BalkenListComponent implements OnInit {
  tasksInOrder: Balken[] = [];

  @Input() loading = false;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinBalken: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveBalken: EventEmitter<any> = new EventEmitter();

  @Input()
  set tasks(arr: Balken[]) {
    this.tasksInOrder = [
      ...arr.filter((t) => t.state === "TASK_PINNED"),
      ...arr.filter((t) => t.state !== "TASK_PINNED"),
    ];
  }

  constructor() {}

  ngOnInit() {}
}
