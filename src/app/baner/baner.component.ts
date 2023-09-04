import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit {
  
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {

  }
}
