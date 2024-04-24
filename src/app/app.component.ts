import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="increment()">Add</button>
    <button (click)="decrement()">dec</button>
    <button (click)="reset()">reset</button>
    <div class="app">{{ count }}</div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  count!: number;
  ngOnInit() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
