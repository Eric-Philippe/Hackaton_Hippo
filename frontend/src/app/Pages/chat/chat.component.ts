import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    DatePipe,
  ],
  providers: [DatePipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  messages: { token: string; content: string; time: Date }[] = [
    {
      token: 'CestLeTokenDeNico',
      content: 'Salut, ça va ?',
      time: new Date(),
    },
    {
      token: 'CestLeTokenDunAutrePelo',
      content: 'Nickel et toi ?',
      time: new Date(),
    },
    {
      token: 'CestLeTokenDeNico',
      content: "T'as vu y a une innondation en zone 3",
      time: new Date(),
    },
    {
      token: 'CestLeTokenDunAutrePelo',
      content: "Oui c'est mouillé",
      time: new Date(),
    },
  ];

  myToken: string = 'CestLeTokenDeNico';
}
