//Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//Dependencies
import { NgxPaginationModule } from 'ngx-pagination';

//Components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MonstersComponent } from './pages/monsters/monsters.component';
import { RacesComponent } from './pages/races/races.component';
import { LoginComponent } from './auth/login/login.component';

//Pipes
import { MonsterfilterPipe } from './pipes/monsterfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MonstersComponent,
    RacesComponent,
    LoginComponent,
    MonsterfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
