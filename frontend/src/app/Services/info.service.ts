import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor() {}

  private apiUrl = 'https://api.example.com/activities'; // R

  getDisaster(): Observable<DisasterInfo[]> {
    // Utilisez cette ligne pour appeler l'API réelle
    // return this.http.get<DisasterInfo[]>(this.apiUrl);

    // Simulez une réponse avec des données fictives
    return of([
      {
        disaster_Id: 1,
        title: 'innondation',
        zones: '3',
        type: 'string',
        date: '12/01/2180',
        level: '3',
      },
      {
        disaster_Id: 2,
        title: 'innondation',
        zones: '1',
        type: 'string',
        date: '12/01/2180',
        level: '3',
      },
      {
        disaster_Id: 3,
        title: 'seisme',
        zones: '3',
        type: 'string',
        date: '12/01/2180',
        level: '3',
      },
      {
        disaster_Id: 4,
        title: 'seisme',
        zones: '5',
        type: 'string',
        date: '12/01/2180',
        level: '3',
      },
    ]);
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
