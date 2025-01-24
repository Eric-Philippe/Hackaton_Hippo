import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../Interfaces/message.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://localhost:8001/chats'; // Remplacez par l'URL réelle de l'API

  constructor(private http: HttpClient) {}

  getMessagesByZone(zone: number): Observable<Message[]> {
    //return this.http.get<Message[]>(`${this.apiUrl}/zone/${zone}`);
    return of([
      {
        username: 'Hippopotame anonyme',
        zone: 3,
        content: 'Salut, ça va ?',
        time: new Date(),
        isAdmin: false,
      },
      {
        username: 'Loutre anonyme',
        zone: 3,
        content: 'Nickel et toi ?',
        time: new Date(),
        isAdmin: false,
      },
      {
        username: 'Hippopotame anonyme',
        zone: 3,
        content: "T'as vu y a une innondation en zone 3",
        time: new Date(),
        isAdmin: false,
      },
      {
        username: 'Loutre anonyme',
        zone: 3,
        content: 'Et moi je vais innonder le chat',
        time: new Date(),
        isAdmin: false,
      },
      {
        username: 'Loutre anonyme',
        zone: 3,
        content: '.',
        time: new Date(),
        isAdmin: false,
      },
      {
        username: 'Loutre anonyme',
        zone: 3,
        content: '.',
        time: new Date(),
        isAdmin: false,
      },
      {
        username: 'Loutre anonyme',
        zone: 3,
        content: '.',
        time: new Date(),
        isAdmin: false,
      },
      {
        username: 'Loutre anonyme',
        zone: 3,
        content: '.',
        time: new Date(),
        isAdmin: false,
      },
      {
        username: 'Loutre anonyme',
        zone: 3,
        content: '.',
        time: new Date(),
        isAdmin: false,
      },
    ]);
  }

  /**
  sendMessage(message: Message): Observable<Message> {
    //return this.http.post<Message>(`${this.apiUrl}/add`, message);
  }
    */
}
