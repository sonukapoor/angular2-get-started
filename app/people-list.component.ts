import { PeopleService } from './people.service';
import { Component } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'people-list',
  template: `
    <ul>
      <li *ngFor="let person of people">
      <a href="#" [routerLink]="['/persons', person.id]">
        {{person.name}}
        </a>
      </li>
    </ul>
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