import { PersonDetailsComponent } from './person-details.component';
import { PeopleService } from './people.service';
import { PeopleListComponent } from './people-list.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routes';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent, PeopleListComponent, PersonDetailsComponent],
  bootstrap: [AppComponent],
  providers: [PeopleService]
})
export class AppModule { }
