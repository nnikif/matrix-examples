import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildAmountComponent } from './child-amount/child-amount.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { StandardFormComponent } from './standard-form/standard-form.component';
import {FormsModule} from "@angular/forms";
import { ForbiddenNameDirective } from './directives/forbidden-name.directive';
import { ClickButtonComponent } from './click-button/click-button.component';
import { RxComponent } from './rx/rx.component';
import { ThirdChildComponent } from './third-child/third-child.component';
import { FourthChildComponent } from './fourth-child/fourth-child.component';
import { IfNotDirective } from './directives/if-not.directive';
import { FifhChildComponent } from './fifh-child/fifh-child.component';
import {SomeDirDirective} from "./directives/some-dir.directive";
import {Module1Module} from "./modules/module1/module1.module";
import {InjaclubService} from "./injaclub.service";

@NgModule({
  declarations: [
    AppComponent,
    ChildAmountComponent,
    ParentComponentComponent,
    SecondChildComponent,
    StandardFormComponent,
    ForbiddenNameDirective,
    ClickButtonComponent,
    RxComponent,
    ThirdChildComponent,
    FourthChildComponent,
    IfNotDirective,
    FifhChildComponent,
    SomeDirDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [InjaclubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
