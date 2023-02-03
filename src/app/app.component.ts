import {Component, HostListener, OnInit} from '@angular/core';
import {GenreResponse} from "./models/genre-response";
import {MovieApiServiceService} from "./service/movie-api-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private movieService: MovieApiServiceService) {
  }
  ngOnInit() {
    this.initGenres();
  }

  genres:GenreResponse = new GenreResponse();
  title = 'theMoviesDatabaseApp';
  navbg:any;
  @HostListener('document: scroll') scrollover(){
    console.log(document.body.scrollTop, 'scrolllength#');

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbg = {
        'background-color': '#800000FF'
      }
    } else {
      this.navbg = {}
    }

  }
  initGenres(){
    this.movieService.getMovieList().subscribe((data)=> {
      this.genres=data;
    })
  }
}
