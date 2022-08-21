import { Component, Input, OnInit } from '@angular/core';
import { CatalogServices } from 'src/app/services/catalog.services';

import { Movies, MovieDetails} from '../../models/movies.model';

@Component({
  selector: 'app-catalogitem',
  templateUrl: './catalogitem.component.html',
  styleUrls: ['./catalogitem.component.css']
})
export class CatalogitemComponent implements OnInit {
  @Input() movie!: MovieDetails;
  @Input() id!:number;
  baseUrl:string;
  

  constructor(catalogService:CatalogServices) {
    this.baseUrl=catalogService.baseUrl;
   }

  ngOnInit(): void {
    


  }


}
