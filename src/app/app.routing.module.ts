import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth/auth.component";
import { AuthDeGuard } from "./auth/auth/auth.deguard";
import { AuthGuard } from "./auth/auth/auth.guard";
import { CatalogdetailsComponent } from "./catalog/catalogdetails/catalogdetails.component";
import { CataloglistComponent } from "./catalog/cataloglist/cataloglist.component";

const routes : Routes=[
    {path:'',component:AuthComponent},
    {path:'login',component:AuthComponent,canActivate:[AuthDeGuard]},
    
        {path:'catalog',component:CataloglistComponent, canActivate:[AuthGuard] },
        {path:'catalog/:id',component:CatalogdetailsComponent , canActivate:[AuthGuard]}
        
    ]
   

// const routes : Routes=[
//     {path:'login',component:AuthComponent},
    
//         {path:'catalog',component:CataloglistComponent,canActivate:[AuthGuard]}
        

// ];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
      })
export class AppRoutingModule{



}