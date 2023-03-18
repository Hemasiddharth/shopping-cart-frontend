import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { ListProductsComponent } from './Products/list-products/list-products.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptorService } from './token-interceptor.service';
import { SearchPipe } from './search.pipe';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { BestdealComponent } from './bestdeal/bestdeal.component';
import { ServicedummyComponent } from './servicedummy/servicedummy.component';
import { ProductsService } from './products.service';
import { UsersService } from './users.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    FooterComponent,
    CategoryComponent,
    ListProductsComponent,
    LoginComponent,
    NotFoundComponent,
    SearchPipe,
    EventsComponent,
    AboutComponent,
    BestdealComponent,
    ServicedummyComponent,
   
  
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
   
  },
ProductsService,
UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
