import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MainteanceComponent } from './views/mainteance/mainteance.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, title: 'Homepage',
  },
  { path: 'mainteance', component: MainteanceComponent, title: 'Mainteance',
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full', title: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
