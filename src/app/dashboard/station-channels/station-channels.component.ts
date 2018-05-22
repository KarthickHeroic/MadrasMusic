import { Component, OnInit, AfterViewInit, Input, ViewEncapsulation } from '@angular/core';
import { NewAlbumsService } from '../../services/new-albums.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-station-channels',
  templateUrl: './station-channels.component.html',
  styleUrls: ['./station-channels.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StationChannelsComponent implements OnInit, AfterViewInit  {
 
  public ImageArray = [];
  public ImageUrlArray = [];
  public SvgTileArray = [];
  public SVGInlineString;
  public SVGInlineString2;


  imagepath1; imagepath2; imagepath3; imagepath4; add; data; text;

  constructor(private _newalbumservice: NewAlbumsService, private http: HttpClient) { }

  private _showOther: boolean = false;

  ngOnInit() {

    this._newalbumservice.getImage()
      .subscribe(data => {
        this.ImageUrlArray.push(data);
      });
    this._newalbumservice.getSvgTile()
      .subscribe(data => {
        this.SvgTileArray.push(data);


        this.ImageLoad();  
       var parser = new DOMParser();
        var doc = parser.parseFromString("../../assets/stations/one.svg", "image/svg+xml");
        
       // var svgArr = document.querySelectorAll('../../assets/stations/one.svg');    
        console.log("Array VAL: " + doc.documentElement) ;
      //  document.getElementById('test').innerHTML = p doc;
   
      }); 
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.SVGInlineString = " <image id='image1' height='1' width='1' preserveAspectRatio='none' xlink:href='' />";
    document.getElementById('pattern1').innerHTML = this.SVGInlineString;
      var Svgimgchange = document.getElementById("image1");
      console.log("size " + Svgimgchange);

      Svgimgchange.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.imagepath1);
      console.log("--------------------------------------------");
    }, 10);
  }




    

  ImageLoad(): void {

    for (let result of this.ImageUrlArray[0]) {
      this.ImageArray.push(result.imgUrl);
       }
    this.imagepath1 = this.ImageArray[0];
    this.imagepath2 = this.ImageArray[1];
    this.imagepath3 = this.ImageArray[2];
    this.imagepath4 = this.ImageArray[3];
  }
}
