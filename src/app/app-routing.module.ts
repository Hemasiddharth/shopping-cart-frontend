import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BestdealComponent } from './bestdeal/bestdeal.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListProductsComponent } from './Products/list-products/list-products.component';
import { ServicedummyComponent } from './servicedummy/servicedummy.component';

const routes: Routes = [
  {path: '', component: ListProductsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'category', redirectTo: '/' ,pathMatch: 'full'},
  {path: 'category/:catid', component:ListProductsComponent},
  {path: 'events.html', component:EventsComponent},
  {path: 'about.html', component:AboutComponent},
{path: 'products.html', component: BestdealComponent},
{path: 'services.html', component:ServicedummyComponent},
{path:'auth', loadChildren: ()=>import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
