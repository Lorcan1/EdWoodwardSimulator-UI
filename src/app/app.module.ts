import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ClubPlayersComponent } from './components/club-players/club-players.component';
import { GoalkeeperComponent } from './goalkeeper/goalkeeper.component';
import { LeagueComponent } from './league/league.component';
import { MatchComponent } from './match/match.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    ClubPlayersComponent,
    GoalkeeperComponent,
    LeagueComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GaugeModule.forRoot(),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
