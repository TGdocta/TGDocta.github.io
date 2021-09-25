import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MonstersComponent } from './pages/monsters/monsters.component';
import { RacesComponent } from './pages/races/races.component';

const MAIN = 'login'

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,    
  },
  {
    path:'monsters',
    component: MonstersComponent,    
  },
  {
    path:'races',
    component: RacesComponent,    
  },
  {
    path:'', pathMatch:'full', redirectTo: MAIN
  },
  {
    path:'**', pathMatch:'full', redirectTo: MAIN
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
