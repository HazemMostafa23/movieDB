import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/auth.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isAuthenticated=false;
  constructor(private authServices:AuthServices, private router :Router) { }


  ngOnInit(): void {
    this.authServices.user.subscribe(user=>{
      this.isAuthenticated=!!user;


    });
  }
  onCatalog(){
    this.router.navigate(['/catalog']);

  }
  onSignOut()
  {
    this.authServices.signOut();
    this.router.navigate(['/login']);
    
      }

}
