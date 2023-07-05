import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { PostBodyComponent } from './components/post-body/post-body.component';
import { ThreadBodyComponent as ThreadBodyComponent } from './components/thread-body/thread-body.component';



@NgModule({
  declarations: [
    ProfileComponent,
    PostBodyComponent,
    ThreadBodyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ForxmCoreModule { }
