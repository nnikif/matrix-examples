import {Component, Host, OnInit} from '@angular/core';
import {InjaclubService} from "../injaclub.service";
import {ParentComponentComponent} from "../parent-component/parent-component.component";

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss'],
})
export class SecondChildComponent implements OnInit {

  constructor(private injaclub: InjaclubService, @Host() private parent: ParentComponentComponent ) {
    console.log(injaclub.count)
  }

  ngOnInit(): void {
  }


  print() {
    this.parent.print();
    console.log(this.parent.amount);
  }


// #4 -----------------------

}
