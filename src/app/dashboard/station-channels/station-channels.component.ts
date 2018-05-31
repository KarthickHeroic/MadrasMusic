import { Component, OnInit, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';
import { NewAlbumsService } from '../../services/new-albums/new-albums.service';
import { HttpClient } from '@angular/common/http';
import { Svg } from './svg';
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-station-channels',
  templateUrl: './station-channels.component.html',
  styleUrls: ['./station-channels.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StationChannelsComponent implements OnInit, AfterViewInit  {
 
  public Image = [];
  public ImageUrlArray = [];



  constructor(private _newalbumservice: NewAlbumsService, private http: HttpClient, private _Svg: Svg) { }

  private _showOther: boolean = false;

  ngOnInit() {

    this._newalbumservice.getImage()
      .subscribe(data => {
        this.ImageUrlArray.push(data);       
      });
  }

  ngAfterViewInit() {
    setTimeout(() => { 
      this.ImageLoad();  
      document.getElementById('ShapeContainer').innerHTML = this._Svg.polygon_3;
      this.Image.forEach((element, index) => { 
       
        if(index == 4)
        {
          return false;
        }
        var SvgImgBinding = document.getElementById("image-" + index);
        SvgImgBinding.setAttributeNS('http://www.w3.org/1999/xlink', 'href', element);
      });
   
    }, 10);
  }
   
  ImageLoad(): void {  
    console.log(this.ImageUrlArray.length);
    for (let result of this.ImageUrlArray[0]) {
      this.Image.push(result.imgUrl);
    }

}
}
