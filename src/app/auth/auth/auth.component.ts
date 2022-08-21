import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/auth.services';

import * as data from './user.json'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  isLogged:boolean=false;
  errorMsg:string | null=null;
  constructor(private router:Router,private authService:AuthServices){}


  ngOnInit(): void {
  }
  onSignIn(form: NgForm){
    const email=form.value.email;
    const password=form.value.password;
    const result=this.authService.signIn(email,password);
    if(result==true){
      this.router.navigate(['/catalog']);
    
    }
    else{
      this.errorMsg="Invalid Email/Password";
    }
 


  }


}
