import { Component, OnInit } from '@angular/core';
import PlayersJson from './players.json';
import { HttpClient } from "@angular/common/http";

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
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    const url ='http://localhost:8080/get-player'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
  })

}
}
