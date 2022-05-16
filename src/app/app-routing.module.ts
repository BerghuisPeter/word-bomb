import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full'
  },
  {
    path: 'game',
    loadChildren: () => import('./features/game/game.module').then(m => m.GameModule)
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
  { path: '404', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
