import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PictureComponent } from './picture/picture.component';
import { WhoareweComponent } from './whoarewe/whoarewe.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    {path: 'pictures', component:PictureComponent},
    {path: 'whoarewe', component:WhoareweComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
