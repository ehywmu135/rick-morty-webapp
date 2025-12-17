import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  constructor() { }

  getMessage()
  {
    return "first demo service message(getMessage in demo-service.ts)";
  }

}
