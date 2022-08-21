import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { CataloglistComponent } from './catalog/cataloglist/cataloglist.component';
import { CatalogitemComponent } from './catalog/catalogitem/catalogitem.component';
import { CatalogdetailsComponent } from './catalog/catalogdetails/catalogdetails.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AuthServices } from './services/auth.services';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CataloglistComponent,
    CatalogitemComponent,
    CatalogdetailsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,HttpClientModule 
  ],
  providers: [AuthServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
