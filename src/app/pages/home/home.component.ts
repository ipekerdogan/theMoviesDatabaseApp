import {Component, OnInit} from '@angular/core';
import {MovieApiServiceService} from "../../service/movie-api-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: MovieApiServiceService
  ) {
  }
  bannerResult:any=[];
  ngOnInit() {
    this.bannerData();
  }

  //bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) =>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    })
  }
}
