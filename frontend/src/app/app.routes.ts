import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [ { path: '', component: HomeComponent }, // Route par défaut
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection pour les routes non trouvées
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }