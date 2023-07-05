import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { PostBodyComponent } from './components/post-body/post-body.component';
import { ThreadBodyComponent } from './components/thread-body/thread-body.component';
import { HeaderComponent } from './components/header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProfileComponent,
    PostBodyComponent,
    ThreadBodyComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule
  ],
  exports: [
    ProfileComponent,
    PostBodyComponent,
    ThreadBodyComponent,
    HeaderComponent
  ]
})
export class ForxmCoreModule { }
