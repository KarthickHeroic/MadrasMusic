import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
   // this.getRestItems();
  }

  // // Read all REST Item
  // getRestItems(): void {
  //   this.restItemsServiceGetRestItems()
  //     .subscribe(
  //       restItems => {
  //         this.restItems = restItems;
  //         console.log(this.restItems);
  //       }
  //     )
  // }

  // getRestSingleItems(): void {
  //   this.getSingle("BF6ACF15-A8D8-4837-B0D2-8539F044B4A1")
  //     .subscribe(
  //       restItems => {
  //         this.restItems = restItems;
  //         console.log(this.restItems);
  //       }
  //     )
  // }


  // // Rest Items Service: Read all REST Items
  // restItemsServiceGetRestItems() {
  //   return this.http
  //     .get<any[]>(this.restItemsUrl)
  //     .pipe(map(data => data));
  // }

  // public getSingle<T>(AlbumId: string): Observable<T> {
  //   return this.http.get<T>(this.restItemsUrl + AlbumId);
  // }

}
