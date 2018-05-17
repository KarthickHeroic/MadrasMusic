import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  restItems: any;
  restItemsUrl = 'https://service.madrasmusic.com/MMService.svc/GetNewReleases';

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }


}
