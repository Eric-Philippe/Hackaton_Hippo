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
import { ChatService } from '../../Services/chat.service';
import { Message } from '../../Interfaces/message.interface';
import { ActivatedRoute } from '@angular/router';

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

  myUsername: string = 'Hippopotame anonyme';

  zone: number = 3;

  messages: Message[] = [];

  constructor(private route: ActivatedRoute, private chatService: ChatService) {
    this.chatService.getMessagesByZone(this.zone).subscribe((data) => {
      this.messages = data;
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    const container = this.chatContainer.nativeElement;
    container.scrollTop = container.scrollHeight;
  }

  sendMessage(content: string): void {
    if (!this.myUsername) {
      // TODO Générer un nom d'utilisateur aléatoire
    }
    const message: Message = {
      username: this.myUsername,
      zone: this.zone,
      content: content,
      time: new Date(),
      isAdmin: false,
    };
    //this.chatService.sendMessage(message).subscribe()
  }

  zoneId: string | null = null;

  ngOnInit(): void {
    // Récupère l'ID de la zone depuis l'URL
    this.zoneId = this.route.snapshot.paramMap.get('zone');
    console.log('Zone ID pour Chat:', this.zoneId);
    // Chargez les messages spécifiques à cette zone ici
  }
}
