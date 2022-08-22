import { Component, OnInit } from '@angular/core';


import { CatalogServices } from 'src/app/services/catalog.services';

import { Movies} from '../../models/movies.model';

@Component({
  selector: 'app-cataloglist',
  templateUrl: './cataloglist.component.html',
  styleUrls: ['./cataloglist.component.css']
})
export class CataloglistComponent implements OnInit {
  movies!:Movies;

  page:number=1;
  total_pages!:number;
  constructor( private catalogServices:CatalogServices) { 

  }

  ngOnInit(): void {
    
    this.getMovies();

    }

    getMovies(){
      this.catalogServices.getMovies(this.page).subscribe((data) => {
        this.movies = data;
        this.total_pages=this.movies.total_pages;
        console.log(this.movies);
        console.log(this.movies.results);
  
      });
      
    }
    onLoadMore(){
      this.page+=1;
      this.catalogServices.getMovies(this.page).subscribe((data) => {
        
        this.movies.results.push(...data.results);
       
       
  
      });
      
    }
   
  

   

  }
  


