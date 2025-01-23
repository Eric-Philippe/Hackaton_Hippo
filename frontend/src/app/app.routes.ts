import { CommonModule } from '@angular/common';
import { HomeComponent } from './Pages/home/home.component';
import { InfoComponent } from './Pages/info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './Pages/Map/map.component';

export const routes: Routes = [
  { path: '', component: MapComponent }, // Route par défaut
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirection pour les routes non trouvées
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
