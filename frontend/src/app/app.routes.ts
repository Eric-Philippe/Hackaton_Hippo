import { CommonModule } from '@angular/common';
import { HomeComponent } from './Pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
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
=======
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [ { path: '', component: HomeComponent }, // Route par défaut
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirection pour les routes non trouvées
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule, HttpClientModule ],
    exports: [RouterModule] 
  })
  export class AppRoutingModule { }
>>>>>>> 4cab8c294588d74ecfd6a1b766765e1d6e3cb937
