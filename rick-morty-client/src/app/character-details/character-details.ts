// character-details.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { forkJoin } from 'rxjs';
import { CharacterService } from '../character-service';
import { ApiCharacter } from '../character.model';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './character-details.html',
  styleUrl: './character-details.css'
})
export class CharacterDetailsComponent implements OnInit {

  // Holds the loaded character details
  character?: ApiCharacter;

  // Holds the loaded episode objects
  episodes: any[] = [];

  // UI state flags
  isLoading: boolean = true;
  hasError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  /**
   * Lifecycle hook: initializes the component.
   * Extracts the character ID from the route and triggers data loading.
   */
  ngOnInit(): void {
    const id = this.extractCharacterId();

    if (!id) {
      this.hasError = true;
      return;
    }

    this.loadCharacter(id);
  }

  /**
   * Extracts the character ID from the current URL route.
   * Example route: /character/15
   */
  private extractCharacterId(): number | null {
    const id = this.route.snapshot.paramMap.get('id');
    return id ? Number(id) : null;
  }

  /**
   * Loads character details by ID using the CharacterService.
   * Once the character is loaded, triggers episode loading.
   */
  private loadCharacter(id: number): void {
    this.characterService.getCharacterById(id).subscribe({
      next: (char) => {
        this.character = char;
        this.loadEpisodes(char.episode);
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  /**
   * Loads all episode objects referenced by the character.
   * Uses forkJoin to perform parallel HTTP requests.
   */
  private loadEpisodes(episodeUrls: string[]): void {
    if (episodeUrls.length === 0) {
      this.isLoading = false;
      return;
    }

    const episodeRequests = episodeUrls.map(url =>
      this.characterService.getEpisodeByUrl(url)
    );

    forkJoin(episodeRequests).subscribe({
      next: (episodes) => {
        this.episodes = episodes;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }
}
