import { Component, OnInit } from '@angular/core';
import {InjaclubService} from "../injaclub.service";

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss'],

})
export class ParentComponentComponent implements OnInit {
  amount = 200;
  constructor() { }

  ngOnInit(): void {
  }

  print() {
    console.log("PRINTOUT");
  }

}
