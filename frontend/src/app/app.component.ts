import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Pages/home/home.component";
import { ActivityComponent } from "./Components/header/activity/activity.component";


@Component({
  selector: 'app-root',
  imports: [HttpClientModule, HomeComponent, ActivityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
