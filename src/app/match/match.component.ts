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

public scorers:any = []

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
  public result:any = ""
  public homeScorers:String[]

  countOccurrences(list: any[]): any[] {
    console.log("List:",list)
    return list.filter(item => {
      const count = list.filter(existingItem => existingItem === item).length;
      return { [item]: count };
    });
  }
  countOccurrences2(list: any[]): Map<String,Number> {
    let map1 = new Map();
    for(var value of list) {
        let counter = 0
        let target = value
    for (value of list) {
      if (value == target) {
            counter++;
            map1.set(target, counter)
        }
    }
    }
    console.log("Map",map1)

    // this.createImageList(map1)

    return map1;
  }

  createImageList(playerMap: Map<String,Number>): Map<String,String[]> {
    //[Son, imageurl,imageur]

    let map1 = new Map<String,String[]>();
    playerMap.forEach((value: number, key: String) => {
      let imArray :String[] = new Array<string>(value)
      imArray.fill("/assets/football.png")
      map1.set(key,imArray)
      

  });
  

    console.log("createImageList",map1)
    return map1;

  }
    

  

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

}
}
