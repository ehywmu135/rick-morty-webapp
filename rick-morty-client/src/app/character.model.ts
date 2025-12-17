//character.models.ts

// Represents a single character as returned by the Rick & Morty API
export interface ApiCharacter {
  id: number;
  name: string;
  status: string;   // Alive / Dead / unknown
  species: string;  // e.g. Human, Alien, etc.
  type: string;     // Often empty, but can hold a more specific type
  gender: string;   // Male / Female / Genderless / unknown
  image: string;    // URL to the character's avatar image

  // Nested objects coming from the API
  origin: {
    name: string;
    url: string;
  };

  location: {
    name: string;
    url: string;
  };

  // Each string is a URL to an episode, e.g. "https://rickandmortyapi.com/api/episode/1"
  episode: string[];
}

// Top-level response from GET https://rickandmortyapi.com/api/character
export interface ApiCharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ApiCharacter[];
}
