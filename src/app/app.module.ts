import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForxmCoreModule } from 'libs/forxm-core/forxm-core.module';
import { PlayabilityModule } from 'libs/playability/playability.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ForxmCoreModule,
    PlayabilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
