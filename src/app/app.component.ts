import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {InjaclubService} from "./injaclub.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [InjaclubService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor() {
  }
  amount = 50;
  hide = true;
  title = 'matrix-examples';
  get random(){return Math.random()};

  nothing() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

  }
  ngOnInit() {
    setInterval(() => {}, 1000)
  }
}
