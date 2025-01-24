import { Component, Input, OnInit } from '@angular/core';

import { MatDrawerContainer, MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule,MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [],
})
export class HeaderComponent   {
  showMenu = false; // Par défaut, le menu n'est pas affiché

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.showMenu = this.router.url.includes('/info');
    });
  }
}