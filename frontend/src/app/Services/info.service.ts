import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  constructor() {}

  getDisaster(): Observable<[]> {
    // Utilisez cette ligne pour appeler l'API réelle
    // return this.http.get<Activity[]>(this.apiUrl);

    // Simulez une réponse avec des données fictives
    return of([
      {
        activity_id: 1,
        title: 'Randonnée',
        description: 'Découvrez la nature en toute sécurité.',
        url_illustration: '',
        is_available: true,
        zone: 'Toulouse',
        type: 'Seisme',
      },
      {
        activity_id: 2,
        title: 'Plongée sous-marine',
        description: 'Explorez les fonds marins riches.',
        url_illustration: '',
        is_available: false,
        zone: 'La Garonne',
        type: 'Inondation',
      },
      {
        activity_id: 3,
        title: 'Vélo',
        description: 'Tour de Blagnac',
        url_illustration: '',
        is_available: false,
        zone: 'Blagnac',
        type: 'Seisme',
      },
      {
        activity_id: 4,
        title: 'JetSki',
        description: 'JetSki sur la Garonne',
        url_illustration: '',
        is_available: true,
        zone: 'Balma',
        type: 'Inondation',
      },
    ]);
  }
}
