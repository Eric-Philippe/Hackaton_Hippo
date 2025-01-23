import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ActivityTestComponent } from './Pages/activity-test/activity-test.component';
import { ChatComponent } from './Pages/chat/chat.component';
import { MapComponent } from './Pages/Map/map.component';

@Component({
  selector: 'app-root',
  imports: [
    HttpClientModule,
    ActivityTestComponent,
    HomeComponent,
    ChatComponent,
    MapComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
