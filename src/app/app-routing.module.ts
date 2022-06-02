import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DetailPlayerComponent } from './components/detail-player/detail-player.component';
import { ListingPlayersComponent } from './components/listing-players/listing-players.component';

const routes: Routes = [
  {path:'', component:ListingPlayersComponent},
  {path: 'add', component: AddPlayerComponent},
  {path: 'detail/:id', component: DetailPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
