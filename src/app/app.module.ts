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


import { NewAlbumsService } from './services/new-albums.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    CenterPanelComponent,
    LeftPanelComponent,
    RightPanelComponent,
    PageNotFoundComponent,
    HistoryTrendingComponent,
    NewAlbumComponent,
    StationChannelsComponent,
    LeftNavComponent,
    MyMashupComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [NewAlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
