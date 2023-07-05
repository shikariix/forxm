import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForxmCoreModule } from 'libs/forxm-core/forxm-core.module';
import { PlayabilityModule } from 'libs/playability/playability.module';
import { PagesModule } from './pages/pages.module';
import { HeaderComponent } from '../../libs/forxm-core/components/header/header.component';
import { MatCommonModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ForxmCoreModule,
    PlayabilityModule,
    PagesModule,
    MatCommonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
