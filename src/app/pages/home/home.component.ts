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
  trendingMovieResult:any=[];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];
  crimeMovieResult: any = [];
  dramaMovieResult: any = [];
  familyMovieResult: any = [];
  fantasyMovieResult: any = [];
  historyMovieResult: any = [];
  horrorMovieResult: any = [];
  musicMovieResult: any = [];
  mysteryMovieResult: any = [];
  romanceMovieResult: any = [];
  tvmovieMovieResult: any = [];
  warMovieResult: any = [];
  westernMovieResult: any = [];
  ngOnInit() {
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.comedyMovie();
    this.animationMovie();
    this.documentaryMovie();
    this.sciencefictionMovie();
    this.thrillerMovie();
    this.crimeMovie();
    this.dramaMovie();
    this.familyMovie();
    this.fantasyMovie();
    this.historyMovie();
    this.horrorMovie();
    this.musicMovie();
    this.mysteryMovie();
    this.romanceMovie();
    this.tvmovieMovie();
    this.warMovie();
    this.westernMovie();
  }

  //bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) =>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    });
  }
  //trendingdata
  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) =>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  // action
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }

  // adventure
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }


  // animation
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }

  // crime
  crimeMovie() {
    this.service.fetchCrimeMovies().subscribe((result) => {
      this.crimeMovieResult = result.results;
    });
  }

  // drama
  dramaMovie() {
    this.service.fetchDramaMovies().subscribe((result) => {
      this.dramaMovieResult = result.results;
    });
  }


  // family
  familyMovie() {
    this.service.fetchFamilyMovies().subscribe((result) => {
      this.familyMovieResult = result.results;
    });
  }

  // fantasy
  fantasyMovie() {
    this.service.fetchFantasyMovies().subscribe((result) => {
      this.fantasyMovieResult = result.results;
    });
  }

  // history
  historyMovie() {
    this.service.fetchHistoryMovies().subscribe((result) => {
      this.historyMovieResult = result.results;
    });
  }


  // horror
  horrorMovie() {
    this.service.fetchHorrorMovies().subscribe((result) => {
      this.horrorMovieResult = result.results;
    });
  }

  // music
  musicMovie() {
    this.service.fetchMusicMovies().subscribe((result) => {
      this.musicMovieResult = result.results;
    });
  }

  // mystery
  mysteryMovie() {
    this.service.fetchMysteryMovies().subscribe((result) => {
      this.mysteryMovieResult = result.results;
    });
  }

  // romance
  romanceMovie() {
    this.service.fetchRomanceMovies().subscribe((result) => {
      this.romanceMovieResult = result.results;
    });
  }

  // tvmovie
  tvmovieMovie() {
    this.service.fetchTvMovieMovies().subscribe((result) => {
      this.tvmovieMovieResult = result.results;
    });
  }


  // war
  warMovie() {
    this.service.fetchWarMovies().subscribe((result) => {
      this.warMovieResult = result.results;
    });
  }

  // western
  westernMovie() {
    this.service.fetchWesternMovies().subscribe((result) => {
      this.westernMovieResult = result.results;
    });
  }

}
