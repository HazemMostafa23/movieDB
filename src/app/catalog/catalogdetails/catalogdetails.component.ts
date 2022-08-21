import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie} from 'src/app/models/movie.model';
import{Cast}from'src/app/models/cast.model'
import { DataServices } from 'src/app/services/data.services';
import { Subscription } from 'rxjs';
import { CatalogServices } from 'src/app/services/catalog.services';
import { Reviews } from 'src/app/models/reviews.model';

@Component({
  selector: 'app-catalogdetails',
  templateUrl: './catalogdetails.component.html',
  styleUrls: ['./catalogdetails.component.css']
})
export class CatalogdetailsComponent implements OnInit , OnDestroy{
  id!:number;
  movie?:Movie;
  cast?:Cast;
  reviews?:Reviews;
  baseUrl:string;
  paraSub!:Subscription;
  movieSub!:Subscription;
  castSub!:Subscription;
  reviewSub!:Subscription;

  constructor(private route: ActivatedRoute,private dataService:DataServices,catalogServices:CatalogServices) {
    this.baseUrl=catalogServices.baseUrl;
   }


  ngOnInit() {
    this.paraSub=this.route.params
      .subscribe(
        (params: Params) => {
          this.id=+params['id'];
          
         
        }
      );
      this.movieSub=this.dataService.getMovie(this.id).subscribe(movieData=>{
        this.movie=movieData;
 

      });
      this.castSub=this.dataService.getCast(this.id).subscribe(castData=>{
        this.cast=castData;

      });
      this.reviewSub=this.dataService.getReviews(this.id).subscribe(reviewData=>{
        this.reviews=reviewData;
       

      });
  }
  ngOnDestroy(): void {
    this.paraSub.unsubscribe();
    this.movieSub.unsubscribe();
    this.castSub.unsubscribe();
  }
  
  counter(i: number|undefined) {
    if(i != undefined){
    
      i=Math.ceil(i);
    }
   
    return new Array(i);
}


}
