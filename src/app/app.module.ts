import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


import { WelcomeComponent } from './homme/welcome/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ConverToSpacePipe } from './shared/conver-to-space.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    ConverToSpacePipe

  ],
  imports: [

  BrowserModule,
  AppRoutingModule,
  FormsModule

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
