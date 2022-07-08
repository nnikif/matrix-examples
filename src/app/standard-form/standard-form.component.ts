import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-standard-form',
  templateUrl: './standard-form.component.html',
  styleUrls: ['./standard-form.component.scss']
})
export class StandardFormComponent implements OnInit {
  email = ''
  data = {
    email: ''
  }
  user =  {
    firstName: '',
    password: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.data);
  }

  onSubmit(f: NgForm) {
    console.log(f)
  }
}
