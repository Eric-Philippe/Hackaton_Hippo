import {
  AfterViewChecked,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    DatePipe,
    ScrollingModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
  ],
  providers: [DatePipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent implements AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;

  myToken: string = 'CestLeTokenDeNico';

  zoneId: number = 3;

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
      content: "Oui et moi j'innonde le chat",
      time: new Date(),
    },
    {
      token: 'CestLeTokenDunAutrePelo',
      content: '.',
      time: new Date(),
    },
    {
      token: 'CestLeTokenDunAutrePelo',
      content: '.',
      time: new Date(),
    },
    {
      token: 'CestLeTokenDunAutrePelo',
      content: '.',
      time: new Date(),
    },
    {
      token: 'CestLeTokenDunAutrePelo',
      content: '.',
      time: new Date(),
    },
    {
      token: 'CestLeTokenDunAutrePelo',
      content: '.',
      time: new Date(),
    },
  ];

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    const container = this.chatContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }
}
