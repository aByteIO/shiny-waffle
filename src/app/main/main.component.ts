import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetKeys } from '../actions/auth.actions';
import { Observable } from 'rxjs';
import { selectKeys } from '../reducers';

@Component({
  selector: 'ngsif-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  keys: Observable<any>;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetKeys());
    this.keys = this.store.select(selectKeys);
  }

}
