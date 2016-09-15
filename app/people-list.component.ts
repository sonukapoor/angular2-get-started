import { Response } from '@angular/http';
import { PeopleService } from './people.service';
import { Component } from '@angular/core';
import {Person} from './person';

@Component({
  selector: 'people-list',
  template: `
  <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
  <section>
    <ul>
      <li *ngFor="let person of people">
      <a href="#" [routerLink]="['/persons', person.id]">
        {{person.name}}
        </a>
      </li>
    </ul>
  </section>
  <section *ngIf="errorMessage">
    {{errorMessage}}
  </section>
  `
})

export class PeopleListComponent {
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peopleService
      .getAll()
      .subscribe(
      p => this.people = p,
      e => this.errorMessage = e,
      () => this.isLoading = false);
  }
}