import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, timestamp } from 'rxjs/operators';
import {Movie} from '../models/Movie'
@Injectable({

  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiBase; 
  private key = environment.apiKey;
  constructor(private http: HttpClient) { 

  }
  getUpcoming(page: number): Observable<Movie[]> {
    //https://api.themoviedb.org/3/movie/upcoming?api_key=1a5602c2cce1df66d9735323fe31b85d&language=en-US&page=1
    console.log(`getUpcoming page: ${page}`);
    return this.http.get<Movie[]>(`${this.baseUrl}/movie/upcoming${this.key}&language=en-US&page=${page}`)
      
  }
  getNowPlaying(page: number): Observable<Movie[]> {
    //https://api.themoviedb.org/3/movie/now_playing?api_key=1a5602c2cce1df66d9735323fe31b85d&language=en-US&page=1    
    console.log(`get now playing page: ${page}`);
    return this.http.get<Movie[]>(`${this.baseUrl}/movie/now_playing${this.key}&language=en-US&page=${page}`)
      
  }
  getTopRated(page: number): Observable<Movie[]> {
    //https://api.themoviedb.org/3/movie/top_rated?api_key=1a5602c2cce1df66d9735323fe31b85d&language=en-US&page=1
    return this.http.get<Movie[]>(`${this.baseUrl}/movie/top_rated${this.key}&language=en-US&page=${page}`)
        
  }
  getMovie(id:number){
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    // https://api.themoviedb.org/3/movie/157375?api_key=1a5602c2cce1df66d9735323fe31b85d&language=en-US

    //get image
    //https://image.tmdb.org/t/p/original/mCR1ZxbdP4JgUsBmbR1Y4X3ohMR.jpg
    //https://image.tmdb.org/t/p/original/poster_path
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}${this.key}&language=en-US`)
  }

}