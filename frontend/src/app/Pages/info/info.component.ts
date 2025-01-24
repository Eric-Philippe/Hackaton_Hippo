import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivityComponent } from '../../Components/activity/activity.component';
import { DisasterInfoComponent } from '../../Components/disaster-info/disaster-info.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  imports: [MatIconModule, ActivityComponent, DisasterInfoComponent],
  standalone: true,
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {

  zoneId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupère l'ID de la zone depuis l'URL
    this.zoneId = this.route.snapshot.paramMap.get('zone');
    console.log('Zone ID pour Info:', this.zoneId);
    // Chargez les données spécifiques à cette zone ici
  }
}
