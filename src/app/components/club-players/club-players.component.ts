import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-club-players',
  templateUrl: './club-players.component.html',
  styleUrls: ['./club-players.component.scss']
})
export class ClubPlayersComponent implements OnInit {
  public data:any = []

  constructor(private http: HttpClient) { }


  ngOnInit(){
    const url ='http://localhost:8080/get-all-players'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
}

enteredSearchValue: string  = '';

@Output()
searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

onSearchTextChanged(){
  this.searchTextChanged.emit(this.enteredSearchValue);
  console.log(this.enteredSearchValue)
}


}
