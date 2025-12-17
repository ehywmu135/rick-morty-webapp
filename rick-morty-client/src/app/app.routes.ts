// app.routes.ts

import { Routes } from '@angular/router';
import { CharactersPage } from './characters-page/characters-page';
import { CharacterDetailsComponent } from './character-details/character-details';

export const routes: Routes = [

  // Grouping all feature routes under /rick-and-morty
  {
    path: 'rick-and-morty',
    children: [

      // List page
      {
        path: 'characters',
        component: CharactersPage
      },

      // Details page
      {
        path: 'character/:id',
        component: CharacterDetailsComponent
      },

      // Default redirect inside the feature
      {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
      }
    ]
  },

  // Redirect root to /rick-and-morty/characters
  {
    path: '',
    redirectTo: 'rick-and-morty/characters',
    pathMatch: 'full'
  }
];
