import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
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
  

  constructor(private http: HttpClient) { }

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

}
}
