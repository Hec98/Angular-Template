import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
