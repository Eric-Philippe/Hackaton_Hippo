import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Message } from '../Interfaces/message.interface';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl: string;

  constructor(private http: HttpClient, private envService: EnvService) {
    this.apiUrl = `${this.envService.apiUrl}:${this.envService.apiPort}/chats`;
  }

  getMessagesByZone(zone: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.apiUrl}/all?zone=${zone}`);
  }

  sendMessage(message: Message, zone: number): Observable<Message> {
    return this.http.post<Message>(`${this.apiUrl}/add`, message);
  }
}
