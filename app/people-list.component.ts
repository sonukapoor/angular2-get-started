import { PeopleService } from './people.service';
import { Component } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'people-list',
  template: `
    <ul>
      <li *ngFor="let person of people" (click)="selectPerson(person)">
        {{person.name}}
      </li>
    </ul>
    <people-details [person]="selectedPerson"></people-details>
  `
})

export class PeopleListComponent {
  people: Person[] = [];
  selectedPerson: Person;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.people = this.peopleService.getAll();
  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
  }
}