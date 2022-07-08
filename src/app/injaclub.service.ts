import { Injectable } from '@angular/core';
console.log("imported")
let count = 1;
@Injectable(
)
export class InjaclubService {
  count!: number;
  counter = 0;
  constructor() {
    console.log("INJECTED" + count++);
    this.count = count;
    this.counter= Math.floor(Math.random()* 100);
  }
}
