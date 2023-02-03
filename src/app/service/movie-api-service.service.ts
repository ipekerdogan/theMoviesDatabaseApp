import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenreResponse, MovieResponse} from "../models/genre-response";

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(
    private http:HttpClient
  ) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey =  "b513f83cd7a6b8ba56f408449a3382dd";

  //bannerapidata

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  //trendingmovieapidata
  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  // searchmovive
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }

  // action
  fetchActionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }

  // animation
  fetchAnimationMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  // comedy
  fetchComedyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  // documentary
  fetchDocumentaryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  // science-fiction

  fetchScienceFictionMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

  // thriller
  fetchThrillerMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }

  // crime
  fetchCrimeMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=80`);
  }

  // drama
  fetchDramaMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=18`);
  }

  // mystery
  fetchMysteryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=9648`);
  }

  // romance
  fetchRomanceMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=10749`);
  }

  // tvmovie
  fetchTvMovieMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=10770`);
  }

  // war

  fetchWarMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=10752`);
  }

  // western
  fetchWesternMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=37`);
  }
  // family
  fetchFamilyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=10751`);
  }

  // fantasy
  fetchFantasyMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=14`);
  }

  // history
  fetchHistoryMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=36`);
  }

  // horror

  fetchHorrorMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=27`);
  }

  // music
  fetchMusicMovies(): Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=10402`);
  }

  //movie-list
  getMovieList(): Observable<GenreResponse> {
    return this.http.get<GenreResponse>(`${this.baseurl}/genre/movie/list?api_key=${this.apikey}`);
  }

  fetchMoviesByCategoryId(categoryId: string): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=${categoryId}`);
  }

}
