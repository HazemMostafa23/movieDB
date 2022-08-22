import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Movies } from "../models/movies.model";
import { Movie} from "../models/movie.model";
import{Cast}from "../models/cast.model"

import { Reviews } from "../models/reviews.model";


@Injectable({ providedIn: 'root' })
export class CatalogServices {
constructor(private httpClient:HttpClient){
}
baseUrl="https://image.tmdb.org/t/p/w500/";

getMovies(page:number){
    
    return this.httpClient.get<Movies>('https://api.themoviedb.org/3/movie/top_rated?api_key=6a60202c1c44e87054f04505adfdbeaa&language=en-US&page='+page);
   
   
 
}

getMovie(id:number){
    return this.httpClient.get<Movie>('https://api.themoviedb.org/3/movie/'+id+'?api_key=6a60202c1c44e87054f04505adfdbeaa&language=en-US');


}
getCast(id:number){
    return this.httpClient.get<Cast>('https://api.themoviedb.org/3/movie/'+id+'/credits?api_key=6a60202c1c44e87054f04505adfdbeaa&language=en-US');

}
getReviews(id:number){
   
    return this.httpClient.get<Reviews>('https://api.themoviedb.org/3/movie/'+id+'/reviews?api_key=6a60202c1c44e87054f04505adfdbeaa&language=en-US&page=1');
   
   
}
}