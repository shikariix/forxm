import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ThreadPageComponent } from './thread-page/thread-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ProfilePageComponent,
    ThreadPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
