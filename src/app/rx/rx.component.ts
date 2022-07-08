import { Component, OnInit } from '@angular/core';
import {connectable, interval, map, publish, share, shareReplay, Subject, take, scan} from "rxjs";
import {InjaclubService} from "../injaclub.service";

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.scss']
})
export class RxComponent implements OnInit {

  publisher$ =
    connectable(interval(1000).pipe(
      take(5),
    ))
  subj$ = new Subject();
  observ$ = interval(1000).pipe(take(5),
    map(() => Math.random()), shareReplay());
  constructor(private inja: InjaclubService) { }

  ngOnInit(): void {
    // this.observ$.subscribe(this.subj$);
    // const obs1$ = this.subj$.asObservable();
    this.observ$.subscribe((r) => console.log('One ', r));
    this.observ$.subscribe((r) => console.log('Two ', r));
    this.publisher$.subscribe(console.log)
  }

  connect() {
    this.publisher$.connect();
    this.observ$.subscribe((r) => console.log('Three ', r));


    // this.observ$.connect();
  }

  scan() {
    const subject = new Subject();
//scan example building an object over time
    const example = subject.pipe(
      scan((acc, curr) => Object.assign({}, acc, curr), {})
    );
//log accumulated values
    const subscribe = example.subscribe(val =>
      console.log('Accumulated object:', val)
    );
//next values into subject, adding properties to object
// {name: 'Joe'}
    subject.next({ name: 'Joe' });
// {name: 'Joe', age: 30}
    subject.next({ age: 30 });
// {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
    subject.next({ favoriteLanguage: 'JavaScript' });
    subject.next({name: 'Nikolay'})
  }
}
