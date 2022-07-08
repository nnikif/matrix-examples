import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RxComponent} from "./rx/rx.component";
import {ThirdChildComponent} from "./third-child/third-child.component";

const routes: Routes = [
  {
    path: 'lazy',
    loadChildren: () => import('./modules/module1/module1.module').then(m => m.Module1Module),
    // component: ThirdChildComponent
  },
  {
    path: 'third',
    component: ThirdChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
