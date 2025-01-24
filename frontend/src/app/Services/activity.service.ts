import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private apiUrl: string;

  constructor(private http: HttpClient, private envService: EnvService) {
    this.apiUrl = `${this.envService.apiUrl}:${this.envService.apiPort}/activity`;
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.apiUrl);
  }

}
export interface Activity {
  activity_id: number;
  title: string;
  description: string;
  url_illustration: string | null;
  is_available: boolean;
  zone: string;
  type: string;
}
