import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private apiUrl = 'https://api.example.com/activities'; // Remplacez par l'URL réelle de l'API

  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activity[]> {
    // Utilisez cette ligne pour appeler l'API réelle
    // return this.http.get<Activity[]>(this.apiUrl);

    // Simulez une réponse avec des données fictives
    return of([
      {
        activity_id: 1,
        title: 'Randonnée en montagne',
        description: 'Découvrez la nature en toute sécurité.',
        url_illustration: 'https://via.placeholder.com/150',
        available: true,
        location: 'Alpes françaises',
        is_seism_tolerant: true,
        is_tsunami_tolerant: false
      },
      {
        activity_id: 2,
        title: 'Plongée sous-marine',
        description: 'Explorez les fonds marins riches.',
        url_illustration: 'https://via.placeholder.com/150',
        available: false,
        location: 'Côte d’Azur',
        is_seism_tolerant: false,
        is_tsunami_tolerant: true
      },
      {
        activity_id: 2,
        title: 'Plongée sous-marine',
        description: 'Explorez les fonds marins riches.',
        url_illustration: 'https://via.placeholder.com/150',
        available: false,
        location: 'Côte d’Azur',
        is_seism_tolerant: false,
        is_tsunami_tolerant: true
      },      {
        activity_id: 1,
        title: 'Randonnée en montagne',
        description: 'Découvrez la nature en toute sécurité.',
        url_illustration: 'https://via.placeholder.com/150',
        available: true,
        location: 'Alpes françaises',
        is_seism_tolerant: true,
        is_tsunami_tolerant: false
      },
    ]);
  }
}

export interface Activity {
  activity_id: number;
  title: string;
  description: string;
  url_illustration: string | null;
  available: boolean;
  location: string;
  is_seism_tolerant: boolean;
  is_tsunami_tolerant: boolean;
}
