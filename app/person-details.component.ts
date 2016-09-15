import { Response } from '@angular/http';
import { PeopleService } from './people.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from './Person';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'people-details',
  templateUrl: 'app/person-details.component.html'
})

export class PersonDetailsComponent implements OnInit, OnDestroy {
  professions: string[] = ['jedi', 'bounty hunter', 'princess', 'sith lord'];
  person: Person;
  sub: any;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.peopleService
        .get(id)
        .subscribe(p => this.person = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoPeoplesList() {
    let link = ['/persons'];
    this.router.navigate(link);
  }

  savePersonDetails() {
    this.peopleService
      .save(this.person)
      .subscribe((r: Response) => { console.log('success') });
  }
}