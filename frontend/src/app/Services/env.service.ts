import { Injectable } from '@angular/core';

interface Env {
  API_URL: string;
  API_PORT: string;
}

declare global {
  interface Window {
    env: Env;
  }
}

@Injectable({
  providedIn: 'root'
})
export class EnvService {
    public get apiUrl(): string {
        return window.env?.API_URL || 'http://localhost';
    }

    public get apiPort(): string {
        return window.env?.API_PORT || '8001';
    }
}