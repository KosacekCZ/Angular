import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { CharLimitPipe } from './char-limit.pipe';
import {ExcreptPipe} from './excrept.pipe';
import { HeaderComponent } from './header/header.component';
import { DirektivaDirective } from './direktiva.directive';
import { RegisterComponent } from './register/register.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BattleshipsComponent } from './battleships/battleships.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    ExcreptPipe,
    HeaderComponent,
    DirektivaDirective,
    RegisterComponent,
    BattleshipsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
