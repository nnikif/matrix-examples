import { Component, OnInit } from '@angular/core';
import {bufferCount, from, interval, map, reduce, take, toArray} from "rxjs";

@Component({
  selector: 'app-fourth-child',
  templateUrl: './fourth-child.component.html',
  styleUrls: ['./fourth-child.component.scss']
})
export class FourthChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const someA = interval(300).pipe(take(5),map(v => Math.pow(v,2)), bufferCount(3)).subscribe(console.log)
  }

}
