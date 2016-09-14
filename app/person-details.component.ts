import { PeopleService } from './people.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './Person';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'people-details',
  template: `
  <section *ngIf="person">
      <h2>You selected:  {{person.name}}</h2>
      <h3>Description</h3>
      <p>
        {{person.name}} weights  {{person.weight}} and is  {{person.height}} tall.
      </p>
    </section>
    <button (click)="gotoPeoplesList()">Back to peoples list</button>
  `
})

export class PersonDetailsComponent implements OnInit, OnDestroy {
  person: Person;
  sub: any;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoPeoplesList()
  {
    let link = ['/persons'];
    this.router.navigate(link);
  }
}