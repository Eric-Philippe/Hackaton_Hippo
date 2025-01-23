import { CommonModule } from '@angular/common';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './Pages/Map/map.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Route par défaut
  { path: '', component: MapComponent }, // Route pour la page de la carte
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirection pour les routes non trouvées
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
