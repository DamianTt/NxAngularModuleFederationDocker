import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'work-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
