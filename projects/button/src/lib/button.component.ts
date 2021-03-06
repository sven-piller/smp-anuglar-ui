import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <button [disabled]="disabled" class="btn btn-primary">{{text}}</button>
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
