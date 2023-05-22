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
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const homeUrl ='http://localhost:8080/get-positions?club=MCFC';
    this.http.get(homeUrl).subscribe((res)=>{
      // this.data = Object.values(res)
      this.homeTeam = res
      console.log(this.homeTeam)
  });
  const awayUrl ='http://localhost:8080/get-positions?club=Spurs';
    this.http.get(awayUrl).subscribe((res)=>{
      // this.data = Object.values(res)
      this.awayTeam = res
      console.log(this.awayTeam)
    });

}
}
