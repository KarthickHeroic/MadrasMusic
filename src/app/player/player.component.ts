import { Component, OnInit, ElementRef } from '@angular/core';
import { MusicPlayerService } from './../services/madrasmusicplayer/madrasmusicplayer';
import { GetsongsService } from './../../app/services/getsongs/getsongs.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class PlayerComponent implements OnInit {
  constructor(private _musicPlayerService: MusicPlayerService, private _eref: ElementRef, private _getSongsService: GetsongsService) { 
    this.isPlayStatus= this._musicPlayerService.getPlayStatus();
    this.currentVolume = this._musicPlayerService.getVolume();
  }

  mute: boolean;
  isMouse: boolean = false;
  currentPlaying: any;
  currentTrackPostion: number;
  currentTrackDuration: number;
  currentTrackProgress: number;
  currentTrackProgressset: number;
  currentVolume:number;
  volume: number;
  isPlayStatus:boolean = false;
  isVolumeStatus: boolean = false;
  progressBarStatus:boolean;
  suffleStatus: boolean= false;
  repeatStatus: boolean =false;

  // subscriptions
  private _musicPlayerMuteSubscription: any;
  private _musicPlayerTrackIdSubscription: any;
  private _musicPlayerVolumeSubscription: any;
  private _musicPlayerEventEmitter: any;

  isPlay(){
    this.isPlayStatus = this._musicPlayerService.getPlayStatus();   
  }
  onVolContainer() {
    this.isMouse = true;
  }
  outVolContainer() {
    this.isMouse = false;
  }
  onClick(event) {
    if (!this.isMouse) {
      if (this._eref.nativeElement.contains(event.target)==true) {  
          if (this.isVolumeStatus == true)
          this.isVolumeStatus = !this.isVolumeStatus
      }
    }
  }
showPlayList(){
  this._getSongsService.playList();
}
isVolume(){
  this.currentVolume = this._musicPlayerService.getVolume();
  this.isVolumeStatus = !this.isVolumeStatus;
  
}
  volChange(event){       
    this._musicPlayerService.adjustVolumeSlider(event.value);  
  }

  ngOnInit() {  
    // Subscribe for mute changes to update bindings
    this.mute = this._musicPlayerService.getMuteStatus();  
  
    // Subscribe for track changes
    this.currentPlaying = this._musicPlayerService.currentTrackData();
    this._musicPlayerTrackIdSubscription = this._musicPlayerService.musicPlayerTrackEventEmitter
      .subscribe((event: any) => {     
        this.suffleStatus = this._musicPlayerService.shuffle;
        this.repeatStatus = this._musicPlayerService.repeat;        
        this.progressBarStatus = !this._musicPlayerService.getPlayStatus();   
        this.isPlayStatus = this._musicPlayerService.getPlayStatus();   
        this.currentPlaying = this._musicPlayerService.currentTrackData();
        this.currentTrackPostion = event.data.trackPosition;
        this.currentTrackDuration = event.data.trackDuration;
        this.currentTrackProgress = event.data.trackProgress;   
 
      });


    // subscribe for volume changes
    this.volume = this._musicPlayerService.getVolume();
    this._musicPlayerVolumeSubscription = this._musicPlayerService.musicPlayerVolumeEventEmitter
      .subscribe((event: any) => {
        this.volume = event.data;
      });

    // this._musicPlayerEventEmitter = this._musicPlayerService.musicPlayerEventEmitter
    // .subscribe((event:any) =>{
    //   this.isPlay = this._musicPlayerService.getPlayStatus();
    //   console.log(this.isPlay)
    // })
  }


  ngOnDestroy() {
    this._musicPlayerMuteSubscription.unsubscribe();
    this._musicPlayerTrackIdSubscription.unsubscribe();
    this._musicPlayerVolumeSubscription.unsubscribe();
  //  this._musicPlayerEventEmitter.unsubscribe();
  }

  get progress(): string {
    return this.currentTrackProgress ? (this.currentTrackProgress.toString() + '%') : '0%';
  }
  // changePos(setPos) {  
  //    setTimeout(() => {    
  //     if (setPos.source._isSliding != true) {
  //       var duration = this._musicPlayerService.duration;
  //       var progress = (setPos.value / 100) * duration;    
  //       console.log(progress);        
  //      return this._musicPlayerService.adjustProgress(progress)      

  //     }
  //   }, 100);
  // }
  // OnChange(event){
  //   var x = event.offsetX, width = event.target.clientWidth, duration = this._musicPlayerService.duration;
  //   var progress = (x / width) * duration;    
  //   return this._musicPlayerService.adjustProgress(progress)
  // }
}
