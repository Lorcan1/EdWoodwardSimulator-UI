import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-club-players',
  templateUrl: './club-players.component.html',
  styleUrls: ['./club-players.component.scss']
})
export class ClubPlayersComponent implements OnInit {
  public data:any = []

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }


  ngOnInit(){
    this.route.params.subscribe(params => {
    const club = params['club'];
    const url ='http://localhost:8080/get-all-players?club='+ club;
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(url)
    })
})}


enteredSearchValue: string  = '';

@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue);
  console.log(this.enteredSearchValue)
}


}
