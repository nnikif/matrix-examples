import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";

@Component({
  selector: 'app-click-button',
  templateUrl: './click-button.component.html',
  styleUrls: ['./click-button.component.scss']
})
export class ClickButtonComponent implements OnInit {
  @ViewChild('btn', { static: true }) button!: ElementRef;
  buttonSubscription!: Subscription;
  constructor() { }

  ngOnInit(): void {
    this.buttonSubscription =  fromEvent(this.button.nativeElement, 'click')
      .subscribe(res => console.log(res));
  }

}
