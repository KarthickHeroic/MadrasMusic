import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials.modules';
import { FlexLayoutModule } from "@angular/flex-layout";

import { HeaderComponent } from './header/header.component';
import { CenterPanelComponent } from './header/center-panel/center-panel.component';
import { LeftPanelComponent } from './header/left-panel/left-panel.component';
import { RightPanelComponent } from './header/right-panel/right-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HistoryTrendingComponent } from './dashboard/history-trending/history-trending.component';
import { NewAlbumComponent } from './dashboard/new-album/new-album.component';
import { StationChannelsComponent } from './dashboard/station-channels/station-channels.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MyMashupComponent } from './my-mashup/my-mashup.component';
import { HttpClientModule } from '@angular/common/http';
import { ImgFallbackModule } from 'ngx-img-fallback';
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';

import { InlineSVGModule } from 'ng-inline-svg';
import { NewAlbumsService } from './services/new-albums/new-albums.service';
import { SignupService } from './services/signup/signup.service';
import { loginService, GetuserNameService } from './services/login/login.service';
import { Svg } from './dashboard/station-channels/svg';
import { LoginComponent } from './header/right-panel/right-panel.component';
import { SignupComponent } from './header/right-panel/right-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Connection, Cservices } from './services/constring';
import { ToastrModule } from 'ngx-toastr';
import { PlaylistComponent } from './dashboard/playlist/playlist.component';
import { PlayerComponent } from './player/player.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    CenterPanelComponent,
    LeftPanelComponent,
    LoginComponent,
    RightPanelComponent,
    PageNotFoundComponent,
    HistoryTrendingComponent,
    NewAlbumComponent,
    PlayerComponent,
    StationChannelsComponent,
    LeftNavComponent,
    MyMashupComponent,    
    SignupComponent, PlaylistComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ImgFallbackModule,
    InlineSVGModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgSlimScrollModule
  ],
  entryComponents: [LoginComponent, SignupComponent],  
  providers: [NewAlbumsService, loginService, SignupService, GetuserNameService, Svg, Connection, Cservices, {provide: SLIMSCROLL_DEFAULTS, useValue: 
    {
      alwaysVisible: false,
      gridOpacity: '1', barOpacity: '0.5',
      gridBackground: '#c2c2c2',
      gridWidth: '5',
      gridMargin: '0px 0px',
      barBackground: '#2C3E50',
      barWidth: '5',
      barMargin: '0px 0px',
      position: '', // left | right     
      barBorderRadius: 1, // 20
      gridBorderRadius: 0, // 20  
      visibleTimeout: 1000, // 1000
      scrollSensitivity: 1, // 1
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
