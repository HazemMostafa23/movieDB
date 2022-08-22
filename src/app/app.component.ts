import { Component, OnInit } from '@angular/core';
import { AuthServices } from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authservice:AuthServices){

  }
  ngOnInit(): void {
    this.authservice.autoSignIn();
  }

}
