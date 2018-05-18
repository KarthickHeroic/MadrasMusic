import { Component, OnInit } from '@angular/core';
import { NewAlbumsService } from '../../services/new-albums.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
@Component({
  selector: 'app-station-channels',
  templateUrl: './station-channels.component.html',
  styleUrls: ['./station-channels.component.css']
})
export class StationChannelsComponent implements OnInit {
  public ImageArray = [];
  public ImageUrlArray = [];
  public SvgTileArray = [];
  public StaionsSignleSVG;
  
  imagepath1; imagepath2; imagepath3; imagepath4; add; data; text;

  constructor(private _newalbumservice: NewAlbumsService, private http: HttpClient) { }

  ngOnInit() {

    this._newalbumservice.getImage()
      .subscribe(data => {
        this.ImageUrlArray.push(data);
     
      }); 
    this._newalbumservice.getSvgTile()
      .subscribe(data => {
        this.SvgTileArray.push(data);
        console.log(this.SvgTileArray);
        this.ImageLoad();
       // document.createElementNS('http://www.w3.org/2000/svg', '../../assets/two.svg');
      //  this.ImageSVG();

        
       //this.http.get('../../assets/stations/two.svg').map(res => res.text()).subscribe(text => this.data = text);
       // this.http.request('../../assets/stations/two.svg')
        //  .subscribe(response => console.log(response.text()))
        // let text = "";
        // this.http.get('../../assets/stations/two.svg')
        //   .map((res: Response) => res.text())
        //   .subscribe(
        //     data => {
        //       this.text = data;
        //       console.log(text);
        //     });
        console.log(this.data);
      }); 


 



  }

  ImageLoad(): void {
    // this.ImageArray.forEach(element => {
    //   console.log('test' + this.imgUrl);
    // });
  //  this.add = 0;
    for (let result of this.ImageUrlArray[0]) {
      this.ImageArray.push(result.imgUrl);
       }

       this.imagepath1 = this.ImageArray[0];
    this.imagepath2 = this.ImageArray[1];
    this.imagepath3 = this.ImageArray[2];
    this.imagepath4 = this.ImageArray[3];


  
  }

  ImageSVG(){

    this.StaionsSignleSVG = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 285">\
  <defs>\
      <style>  .cls-1 { fill: url(#linear-gradient);}</style>\
      <linearGradient id="linear-gradient" x2="285" y2="285" gradientUnits="userSpaceOnUse">\
      < stop offset = "0" stop - color="#e12b90" />\
        <stop offset="0.11" stop - color="#d83394" />\
          <stop offset="0.28" stop - color="#be489e" />\
            <stop offset="0.5" stop - color="#956aaf" />\
              <stop offset="0.75" stop - color="#5c99c6" />\
                <stop offset="0.99" stop - color="#1fcbdf" />\
                  </linearGradient>\
                  <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">\
    <image id="image1" height="1" width="1" preserveAspectRatio="none" xlink:href=""/>\
  </pattern>\
    <pattern id="pattern2" height="100%" width="100%" patternContentUnits="objectBoundingBox">\
    <image height="1" width="1" preserveAspectRatio="none" xlink:href=""/>\
  </pattern>\
    </defs>\
  <rect class="cls-1" width="285" height="285" />\
  <polygon class="cls-2" points="123.17 114.83 48.56 114.83 11.25 179.45 48.56 244.06 123.17 244.06 160.48 179.45 123.17 114.83" fill="url(#pattern1)" />\
  <polygon class="cls-3" points="235.44 49.94 160.83 49.94 123.52 114.55 160.83 179.17 235.44 179.17 272.75 114.55 235.44 49.94" fill="url(#pattern2)"/>\
</svg>';
    var d1 = document.getElementById('svgTile');
    d1.insertAdjacentHTML('afterend', this.StaionsSignleSVG);

    var Svgimgchange = document.getElementById("image1")
    Svgimgchange.setAttributeNS('http://www.w3.org/1999/xlink', 'href', this.imagepath1);

 
  }
}
