import { Component, Input, OnInit } from '@angular/core';

import { MatDrawerContainer, MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule,MatMenuModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [],
})
export class HeaderComponent   {
  // showMenu = false; // Par défaut, le menu n'est pas affiché

  // constructor(private router: Router) {}


  // ngOnInit(): void {
  //   this.router.events.subscribe(() => {
  //     this.showMenu = this.router.url.includes('/info');
  //   });
  // }

  showMenu: boolean = false; // Initialise le menu comme masqué
  zoneId: string | null = null; // ID de la zone par défaut à null

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID de la zone depuis l'URL
    this.route.paramMap.subscribe((params) => {
      this.zoneId = params.get('zone'); // Récupère l'ID de la zone
      this.showMenu = !!this.zoneId; // Affiche le menu si une zone est sélectionnée
    });
  }
}