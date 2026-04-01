import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  count = signal(0)

  increment() {
    this.count.update(prev => prev + 1)
  }

  decrement() {
    this.count.update(prev => prev - 1)
  }


}
