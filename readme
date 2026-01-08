
# Rick & Morty Web App — Full-Stack Assignment

A full-stack web application built with **Angular** and **ASP.NET Core**, exploring characters from the Rick & Morty universe.

---

## 🌐 Live Application

The application is deployed and accessible online:

**https://rick-morty-webapp-edbkdzfqgmaybmbv.israelcentral-01.azurewebsites.net**

No local setup is required to use the app.

---

## Overview

This project was developed as a full-stack technical assignment.

The application consumes data from the public **Rick & Morty API**, allowing users to:
- Browse characters
- Search and filter results
- View detailed information for each character, including origin, location, and episode appearances

The frontend and backend are served together as a single production-ready web application.

---

## Tech Stack

### Frontend (Client)
- Angular 17+ (Standalone Components)
- TypeScript
- RxJS
- HTML & CSS

### Backend (Server)
- ASP.NET Core (.NET 9, Minimal API)
- C#
- HttpClient
- CORS enabled

---

## Project Structure

rick-morty-webapp/
│
├── rick-morty-client/     # Angular frontend
│   ├── src/app/
│   │   ├── app.ts
│   │   ├── app.config.ts
│   │   ├── character.model.ts
│   │   ├── character-service.ts
│   │   ├── characters-page/
│   │   └── character-details/
│
└── rick-morty-server/      # .NET backend
    ├── Program.cs
    └── Properties/

Features
Client-Side

✔ Display list of all characters
✔ Search by name
✔ Filter by:

Status

Gender

Species

Type

✔ Dynamic client-side filtering (updates instantly)
✔ Character details page
✔ Episode list (loaded in parallel)
✔ Clean modular code + stand-alone components

Server-Side

✔ Proxy endpoint to external API
✔ GET /api/character
✔ CORS enabled
✔ Easy to extend for more endpoints

▶ How to Run the Project localy(optional)
1. Run the Backend (.NET)
cd rick-morty-server
dotnet run

Endpoints:

GET /test

GET /api/character

GET /api/character/{id}

-Run the Frontend (Angular)
cd rick-morty-client
ng serve

Architecture & Methodology
1. Separation of Concerns

Component → UI only

Service → API calls + data access

Model → Strong typing

Routing → Navigation logic

This keeps the code clean, testable, and readable.

2. Reactive Programming with RxJS

The service returns Observable streams

Components subscribe and update UI reactively

Episode loading uses forkJoin for parallel HTTP calls


Author

Ohad Goldberg
Full-Stack Web Developer (Angular + .NET)
Rick & Morty Full-Stack Assignment — StarNext
