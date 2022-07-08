import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InjaclubService} from "../injaclub.service";

@Component({
  selector: 'app-child-amount',
  templateUrl: './child-amount.component.html',
  styleUrls: ['./child-amount.component.scss']
})
export class ChildAmountComponent implements OnInit {
  @Input() amount!: number;
  @Output() amountChange = new EventEmitter<number>();
  constructor() { }

  withdraw() {
    this.amount -= 100;
    this.amountChange.emit(this.amount);
  }
  ngOnInit(): void {
  }

}
