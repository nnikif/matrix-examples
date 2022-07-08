import { Component, OnInit } from '@angular/core';
import {InjaclubService} from "../../../injaclub.service";

@Component({
  selector: 'app-cfm1',
  templateUrl: './cfm1.component.html',
  styleUrls: ['./cfm1.component.scss'],
  providers: []
})
export class Cfm1Component implements OnInit {

  constructor(public inja: InjaclubService) { }

  ngOnInit(): void {
  }

}
