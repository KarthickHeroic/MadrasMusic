import { SonglistComponent } from './dashboard/songlist/songlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ChannelsComponent } from './channels/channels.component';
import { StationsComponent } from './stations/stations.component';
import { MyMashupComponent } from './my-mashup/my-mashup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaylistComponent } from './playlist/playlist.component';


const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent,children:[
    { path: 'Playlist', component: PlaylistComponent, outlet: "slist"},
    { path: 'Songlist', component: SonglistComponent, outlet:"plist" }
  ] },
  { path: 'Albums', component: AlbumsComponent },
  { path: 'Stations', component: StationsComponent },
  { path: 'Channels', component: ChannelsComponent },
  { path: 'MyMashup', component: MyMashupComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, AlbumsComponent, StationsComponent, ChannelsComponent, MyMashupComponent, PageNotFoundComponent]
