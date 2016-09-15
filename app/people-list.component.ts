import { Observable } from 'rxjs/Rx';
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

    /*
    You can also use the below pattern to load the person in an async way.
    1. Change people from  people: Person[] = []; to people: Observable<Person[]>;
    2. Replace the ngOnInit code to this this.people = this.peopleService.getAll();
    3. Add the 'async' pipe into the *ngFor like: <li *ngFor="let person of people | async">
    */
  }
}