import {Component, NgZone, OnInit} from '@angular/core';
import {InjaclubService} from "../injaclub.service";

@Component({
  selector: 'app-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.scss']
})
export class ThirdChildComponent implements OnInit {
  n = 10;
  constructor(private ngZone: NgZone, public inja: InjaclubService) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.n =20, 10)
    })
  }

  changTo30() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => this.n =30, 10)
    })
  }

  getData() {
    const rand = Math.random();
    console.log('DATA LOADED', rand);
    return rand;
  }

  plus() {
    this.inja.counter++;
  }
}
