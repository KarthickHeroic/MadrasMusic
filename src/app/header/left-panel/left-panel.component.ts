import { GetsongsService } from './../../services/getsongs/getsongs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private _getSongsService: GetsongsService) { }

  ngOnInit() {
  }


  showPlayList(): void {  this._getSongsService.playList(); }
}


