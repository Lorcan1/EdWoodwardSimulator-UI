import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ClubPlayersComponent } from './components/club-players/club-players.component';
import { GoalkeeperComponent } from './goalkeeper/goalkeeper.component';
import { LeagueComponent } from './league/league.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'club-players',
    component: ClubPlayersComponent,
  },
  {
    path: 'player/:id',
    component: HomeComponent,
  },
  {
    path: 'goalkeeper/:id',
    component: GoalkeeperComponent,
  },
  {
    path: 'leagueNamePlaceholder',
    component: LeagueComponent,
  },
  {
    path: 'club/:club',
    component: ClubPlayersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
