// characters-page.ts

import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../character-service';
import { ApiCharacter } from '../character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-page',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    JsonPipe,
    FormsModule
  ],
  templateUrl: './characters-page.html',
  styleUrl: './characters-page.css'
})
export class CharactersPage implements OnInit {

  // Full list of characters as returned from the backend (.NET)
  allCharacters: ApiCharacter[] = [];

  // List of characters currently displayed after applying filters
  filteredCharacters: ApiCharacter[] = [];

  // Search text for name-based filtering
  searchText: string = "";

  // Status filter (Alive / Dead / unknown / All)
  statusFilter: string = "All";

  // Species filter (free text)
  speciesFilter: string = "";

  // Type filter (free text)
  typeFilter: string = "";

  // Gender filter (Male / Female / Genderless / unknown / All)
  genderFilter: string = "All";

  // Backend connectivity test message (optional, for debugging)
  backendTestMessage: string = "";

  constructor(
  private characterService: CharacterService,
  private router: Router
) {}


  // Lifecycle hook: called once when the component is initialized.
  // Here we fetch all characters from the backend.
  ngOnInit(): void {

    // Fetch all characters from the backend and initialize state
    this.characterService.getAllCharacters().subscribe((data) => {
      this.allCharacters = data.results;
      this.filteredCharacters = data.results; // Initially, no filters applied
    });
  }
    goToDetails(id: number): void {
  this.router.navigate([`/rick-and-morty/character/${id}`]);
}

  // Central place for applying all filters:
  // - name search
  // - status
  // - species
  // - type
  // - gender
  applyFilters(): void {
    const text = this.searchText.toLowerCase().trim();
    const species = this.speciesFilter.toLowerCase().trim();
    const type = this.typeFilter.toLowerCase().trim();
    const status = this.statusFilter;
    const gender = this.genderFilter;

    // Start from the original full list
    let result = this.allCharacters;

    // 1) Name search
    if (text) {
      result = result.filter(c =>
        c.name.toLowerCase().includes(text)
      );
    }

    // 2) Status filter
    if (status !== 'All') {
      result = result.filter(c =>
        c.status === status
      );
    }

    // 3) Species filter
    if (species) {
      result = result.filter(c =>
        c.species.toLowerCase().includes(species)
      );
    }

    // 4) Type filter
    if (type) {
      result = result.filter(c =>
        c.type.toLowerCase().includes(type)
      );
    }

    // 5) Gender filter
    if (gender !== 'All') {
      result = result.filter(c =>
        c.gender === gender
      );
    }

    this.filteredCharacters = result;
  }

  // Resets all filters to their default values and shows the full list again.
  clearAllFilters(): void {
    this.searchText = "";
    this.statusFilter = "All";
    this.speciesFilter = "";
    this.typeFilter = "";
    this.genderFilter = "All";

    this.applyFilters();
  }
}
