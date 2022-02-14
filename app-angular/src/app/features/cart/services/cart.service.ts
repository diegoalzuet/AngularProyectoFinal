import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  urlCartApi = environment.cartRestApi;


  constructor(
    private http:HttpClient
  ) { }

    getList(): Observable<any>{
      return this.http.get<any[]>(this.urlCartApi);
    }

    addMovieToCart(movie: Movie): Observable<any>{
      return this.http.post<any>(this.urlCartApi,movie);
    }

    removeMovie(movie:Movie):Observable<any>{
      console.log(movie.id);

      return this.http.delete<any>(`${this.urlCartApi}/?id=${movie.id}`);
    }
    deleteAll():Observable<any>{
      return this.http.delete<any>(`${this.urlCartApi}/deleteAll`)
    }
}
