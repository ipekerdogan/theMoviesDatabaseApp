import {Component, OnInit} from '@angular/core';
import {MovieApiServiceService} from "../../service/movie-api-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss']
})
export class NowPlayingComponent implements OnInit {

  constructor(private service: MovieApiServiceService, private router: ActivatedRoute) {
  }
  getNowPlayingResult:any;

  ngOnInit() {
    this.getNowPlayingMovie();
  }

  getNowPlayingMovie(){
    this.service.getNowPlaying().subscribe((result) => {
      console.log(result, 'getnowplaying#');
      this.getNowPlayingResult = result;
    })
  }

}
