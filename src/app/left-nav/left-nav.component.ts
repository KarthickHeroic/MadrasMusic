import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class LeftNavComponent implements OnInit {

  @ViewChild('sidenav') public SideNav;
  constructor(private _eref: ElementRef) { }

  ngOnInit() {
  }

  onClick(event) {    
    if (!this._eref.nativeElement.contains(event.target))
      this.SideNav.close();
  }


}
