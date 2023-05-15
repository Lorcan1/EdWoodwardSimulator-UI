import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-goalkeeper',
  templateUrl: './goalkeeper.component.html',
  styleUrls: ['./goalkeeper.component.scss']
})
export class GoalkeeperComponent implements OnInit {
  public data:any = [];
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
  })

}
}
