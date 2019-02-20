import { ItunessearchService } from './services/itunessearch.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchformComponent } from './searchform/searchform.component';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchformComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItunessearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
