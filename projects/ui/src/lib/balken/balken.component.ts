import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "lib-ui-balken",
  template: `
    <div class="list-item {{ balken?.state }}">
        <span class="h6 list-item-state" [ngClass]="balken?.state">
          <span class="badge badge-dark">{{ balken?.id }}</span>
        </span>
      <span class="h3 list-item-title">
        {{ balken?.title }}
      </span>

      <div class="actions">
        <a *ngIf="balken?.state !== 'TASK_ARCHIVED'" (click)="onPin(balken.id)">
          <span class="icon-star"></span>
        </a>
      </div>
    </div>
  `,
  styles: [
    ".list-item-state { background-color: grey; display: inline-block; width: 30px; height: 30px; }",
    ".list-item-state.TASK_INBOX { background-color: red; }",
    ".list-item-state.TASK_PINNED { background-color: blue; }",
    ".list-item-state.TASK_ARCHIVED { background-color: green; }",
    ".list-item-title { display: inline-block; padding-left: 10px;}",
  ],
})
export class BalkenComponent implements OnInit {
  title: string;
  @Input() balken: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinBalken: EventEmitter<any> = new EventEmitter();

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveBalken: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onPin(id: any) {
    this.onPinBalken.emit(id);
  }
  onArchive(id: any) {
    this.onArchiveBalken.emit(id);
  }
}
