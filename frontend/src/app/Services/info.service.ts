import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.example.com/alert'; // R

  getDisaster(): Observable<DisasterInfo[]> {
    return this.http.get<DisasterInfo[]>(this.apiUrl);
  }

}
export interface DisasterInfo {
  disaster_Id: number;
  title: string;
  zones: string;
  type: string;
  date: string;
  level: string;
}
