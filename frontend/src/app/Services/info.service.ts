import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private apiUrl: string;

  constructor(private http: HttpClient, private envService: EnvService) {
    this.apiUrl = `${this.envService.apiUrl}:${this.envService.apiPort}/alert`;
  }

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
