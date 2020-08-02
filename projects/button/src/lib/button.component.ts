import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button [disabled]="disabled">{{text}}</button>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
