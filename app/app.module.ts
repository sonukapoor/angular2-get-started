import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { PersonDetailsComponent } from './person-details.component';
import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpModule],
  declarations: [AppComponent, PeopleListComponent, PersonDetailsComponent],
  bootstrap: [AppComponent],
  providers: [PeopleService]
})
export class AppModule { }
