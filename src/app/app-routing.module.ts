import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AstroPageComponent } from './component/astro-page/astro-page.component';
import { HomeComponent } from './component/home/home.component';
import { ListpageComponent } from './component/listpage/listpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listpage', component: ListpageComponent},
  { path: 'astro-page', component: AstroPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
