import { Component, OnInit } from '@angular/core';
import PlayersJson from './players.json';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import {  Router } from '@angular/router';

interface PLAYERS {
  heading: Number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data:any = []
  PLAYERS: PLAYERS[] = PlayersJson;
  public sort: string;
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) {
    this.route.params
    .subscribe(params => console.log(params))
   }

  

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = params['id'];
      console.log(userId);
      const url ='http://localhost:8080/get-player-id?id=' + userId;
      this.http.get(url).subscribe((res)=>{
        this.data = res
        console.log(url)
    });
    // const player_id = this.route.params["id"];
    // const url ='http://localhost:8080/get-player' + userId;
    // this.http.get(url).subscribe((res)=>{
    //   this.data = res
    //   console.log(this.route.params)
  })

}
}
