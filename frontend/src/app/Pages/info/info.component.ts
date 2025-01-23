import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivityComponent } from '../../Components/activity/activity.component';

@Component({
  selector: 'app-info',
  imports: [MatIconModule, ActivityComponent],
  standalone: true,
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss',
})
export class InfoComponent {}
