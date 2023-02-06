import {Component, OnInit} from '@angular/core';
import {MovieApiServiceService} from "../../service/movie-api-service.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service:MovieApiServiceService, private router: ActivatedRoute, private readonly domSanitizer: DomSanitizer) {
  }
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  ngOnInit() {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }

  getMovie(id:any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result,'getmoviedetails#');
      this.getMovieDetailResult = result;
    });
  }
    getVideo(id:any) {
      this.service.getMovieVideo(id).subscribe((result) => {
        console.log(result,'getmovievideo#');
        result.results.forEach((element:any) => {
          if (element.type == "Trailer") {
            this.getMovieVideoResult = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.themoviedb.org/video/play?key=${element.key}`);
          }
        });

      });
    }

    getMovieCast(id:any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result, 'getmoviecast#');
      this.getMovieCastResult = result.cast;
    })
    }

}
