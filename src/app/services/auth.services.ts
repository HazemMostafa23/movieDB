
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as data from '../auth/auth/user.json'
import { User } from "../models/user.model";
@Injectable() 
export class AuthServices 
{   
    private Users : User[]=data;
   user=new BehaviorSubject<User|null>(null);
   
   signIn(email:string,password:string){
    const user={
        email:email,password:password
    };
    for(let i=0;i<this.Users.length;i++){
        if(this.Users[i].email==user.email && this.Users[i].password==user.password){
            this.user.next(user);
            return true;

        }

    }
    return false;

   }
   signOut(){
    this.user.next(null);
   }

}