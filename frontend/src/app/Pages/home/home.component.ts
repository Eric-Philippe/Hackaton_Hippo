import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { AlertComponent } from '../../Components/alert/alert.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AlertComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
