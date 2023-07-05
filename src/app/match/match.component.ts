import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  rows = [
    {nom: "Son", team: "home", composants: ["15'", "30'"]}, 
    {nom: "Kane", team: "home", composants: ["40'"]},
    {nom: "Haaland", team: "away", composants: ["1'","60'","90+5'"]}
];

public scorers:any = ""

  public homeTeam:any = []
  public awayTeam:any = []
  public ref = {
    'GK': 0,
    'DL': 1,
    'DCL': 2,
    'DCR': 3,
    'DR': 4,
    'DM':5,
    'MR': 6,
    'MCR': 7,
    'MCL': 8,
    'ML':9,
    'ST':10
  };
  public homeScorers:String[]
  public players:any = []

  constructor(private http: HttpClient) { }

  getAll() {
    const resultUrl ='http://localhost:8080/return-result'
    this.http.get(resultUrl).subscribe((res)=>{
      // this.data = Object.values(res)
      this.scorers = res
      console.log("scorers",this.scorers)
      // this.homeScorers= this.result.homeScorers

    });
  }

  ngOnInit(): void {
    const homeUrl ='http://localhost:8080/get-positions?club=MCFC';
    this.http.get(homeUrl).subscribe((res)=>{
      // this.data = Object.values(res)
      this.homeTeam = res
      console.log(this.homeTeam)
      console.log(
        this.homeTeam.sort((a, b) => this.ref[a.startingPosition] - this.ref[b.startingPosition])
      )
  });
  const awayUrl ='http://localhost:8080/get-positions?club=Spurs';
    this.http.get(awayUrl).subscribe((res)=>{
      // this.data = Object.values(res)
      this.awayTeam = res
      console.log(this.awayTeam)
      console.log(
        this.awayTeam.sort((a, b) => this.ref[a.startingPosition] - this.ref[b.startingPosition])
      )
    });

  const playerInGame= 'http://localhost:8080/processMatch'
  this.http.get(playerInGame).subscribe((res)=>{
    // this.data = Object.values(res)
    this.players = res
    console.log("here",this.players)
    console.log(typeof this.players)
  });


}
}
