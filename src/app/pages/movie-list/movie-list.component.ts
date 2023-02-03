import {Component, OnInit} from '@angular/core';
import {MovieApiServiceService} from "../../service/movie-api-service.service";
import {ActivatedRoute} from "@angular/router";
import {MovieResponse} from "../../models/genre-response";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit{

  constructor(private service:MovieApiServiceService, private readonly route: ActivatedRoute) {
  }

  categoryName?: any;
  categoryId?: any;
  movies:MovieResponse = new MovieResponse();
  getmovieListResult:any=[];

  ngOnInit() {
    this.movieList();
    this.initQueryParams();
  }

  //movielist
  movieList() {
    this.service.getMovieList().subscribe((result) =>{
      console.log(result,'movielistresult#');
      this.getmovieListResult = result;
    });
  }
  initQueryParams() {
    this.route.queryParams.subscribe((data) => {
      this.categoryId = data['category'];
      this.categoryName = data['categoryName'];
      this.initMoviesByCategoryId(this.categoryId);
    })
  }

  initMoviesByCategoryId(categoryId:string){
    if (this.categoryId == null) {
      return;
    }
    this.service.fetchMoviesByCategoryId(categoryId).subscribe((data)=>{
      console.log(data);
      this.movies = data;
    });
  }


}
