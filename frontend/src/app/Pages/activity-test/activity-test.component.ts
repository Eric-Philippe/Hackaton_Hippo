import { Component } from '@angular/core';
import { Activity, ActivityService } from '../../Services/activity.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-test',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './activity-test.component.html',
  styleUrl: './activity-test.component.scss'
})
export class ActivityTestComponent {
  activities: Activity[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.activityService.getActivities().subscribe((data) => {
      this.activities = data;
    });
  }
}
