import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  imports: [CommonModule],
})
export class ActivityComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() urlIllustration!: string | null;
  @Input() available!: boolean;
  @Input() location!: string;
  @Input() isSeismTolerant!: boolean;
  @Input() isTsunamiTolerant!: boolean;
}
