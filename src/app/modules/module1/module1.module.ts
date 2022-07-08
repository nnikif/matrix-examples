import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InjaclubService} from "../../injaclub.service";
import { Cfm1Component } from './cfm1/cfm1.component';
import {Module1RoutingModule} from "./module1-routing.module";


@NgModule({
  declarations: [
    Cfm1Component
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  exports: [
    Cfm1Component
  ],
  providers: [InjaclubService]
})
export class Module1Module { }
