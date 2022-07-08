import {RouterModule, Routes} from "@angular/router";
import {Cfm1Component} from "./cfm1/cfm1.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: Cfm1Component
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule {}
