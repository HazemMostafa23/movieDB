import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.model";

@Injectable({ providedIn: 'root' })

export class CatalogServices{
private movies:Movie[]=[];
baseUrl:string="https://image.tmdb.org/t/p/w500/";
// setMovies(movies: Movie[]){
//     this.movies=movies;

//   }
  getMovies(){
    return this.movies;
  }

}