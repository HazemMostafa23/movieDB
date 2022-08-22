import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, tap,take } from "rxjs";
import { AuthServices } from "src/app/services/auth.services";
@Injectable ({providedIn:'root'})
export class AuthDeGuard implements CanActivate{
    constructor(private authService : AuthServices,private router :Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.user.pipe(
        map(user=>{
           if(user==null){
            return true;
           }
           else{
     
return this.router.createUrlTree(['catalog']);

           }
          
    
    }
    ));
       
    }

    
}