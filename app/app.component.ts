import { PeopleService } from './people.service';
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>{{ title }}</h1>
      <router-outlet></router-outlet>
      `,
    providers: [PeopleService]
})
export class AppComponent { 
  title: string = "Star wars PPlz";
}
