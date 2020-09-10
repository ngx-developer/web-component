import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-score',
  template: `
    <p style="font-size: large;font-weight: 600">
      <button type="button" style="padding: 10px;background:#ec7a50" (click)="decrement()">-</button>
      <span style="padding:10px"> {{counter}}</span>
      <button type="button" style="padding: 10px;background:#35cd35" (click)="increment()">+</button>
    </p>
  `,
  styles: []
})
export class ScoreCounterComponent implements OnInit {
counter = 0;
  constructor() { }

  ngOnInit() {
  }
  increment() {
    this.counter += 1;
  }
  decrement() {
    if (this.counter > 0) {
      this.counter -= 1;
    }
  }

}
