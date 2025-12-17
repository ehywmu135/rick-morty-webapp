// character-service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ApiCharacter, ApiCharacterResponse } from './character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private readonly baseUrl = 'http://localhost:5269/api/character';

  constructor(private http: HttpClient) {}

  // Fetch all characters from the backend
  getAllCharacters(): Observable<ApiCharacterResponse> {
    return this.http.get<ApiCharacterResponse>(this.baseUrl);
  }

  // Fetch a single character by ID
  // The backend endpoint will be /api/character/:id
  // The method returns a strongly-typed ApiCharacter object.
  getCharacterById(id: number): Observable<ApiCharacter> {
    return this.http.get<ApiCharacter>(`${this.baseUrl}/${id}`);
  }

  // Fetch details about an episode using its full API URL
  // The backend will proxy this request to the Rick & Morty API.
  getEpisodeByUrl(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  // Optional: simple connectivity test
  test(): Observable<string> {
    return this.http.get('http://localhost:5269/test', { responseType: 'text' });
  }
}
