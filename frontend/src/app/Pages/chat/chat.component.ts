import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChatService } from '../../Services/chat.service';
import { Message } from '../../Interfaces/message.interface';

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
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  @ViewChild('messageInput') private messageInput!: ElementRef;

  myUsername?: string;

  zone?: number;

  messages: Message[] = [];

  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.zone = this.route.snapshot.params['zone'];
    this.chatService.getMessagesByZone(this.zone!).subscribe((data) => {
      this.messages = data;
    });
    setInterval(() => {
      this.chatService.getMessagesByZone(this.zone!).subscribe((data) => {
        this.messages = data;
      });
    }, 2000);
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    const container = this.chatContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }

  sendMessage(): void {
    if (!this.myUsername) {
      const adjectives = [
        'Rapide',
        'Brave',
        'Cool',
        'Sympa',
        'Heureux',
        'Malicieux',
        'Lumineux',
        'Chanceux',
      ];
      const nouns = [
        'Manchot',
        'Tigre',
        'Cheval',
        'Renard',
        'Dragon',
        'Corbeau',
        'Loup',
        'Panda',
      ];

      const randomAdjective =
        adjectives[Math.floor(Math.random() * adjectives.length)];
      const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
      const randomNumber = Math.floor(Math.random() * 1000); // Ajoute un chiffre aléatoire pour l'unicité

      this.myUsername = `${randomNoun}${randomAdjective}${randomNumber}`;
    }
    let contentValue = this.messageInput.nativeElement.value;
    const message: Message = {
      username: this.myUsername,
      zone: this.zone!,
      content: contentValue,
      time: new Date(),
      isAdmin: false,
    };
    if (contentValue.trim() !== '') {
      this.messageInput.nativeElement.value = '';
      this.chatService.sendMessage(message).subscribe((response) => {
        console.log('Message envoyé avec succès', response);
      }, (error) => {
        console.error('Erreur lors de l\'envoi du message', error);
      });
    }
  }
}