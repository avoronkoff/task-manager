import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DndModule} from 'ng2-dnd';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './navbar/app.navbar.component';
import { ListsComponent } from './lists/app.lists.component';
import { AddCardComponent } from './card/app.add-card.component';
import { ListsService } from './app.lists.service';

import 'hammerjs';
import { EditlistComponent } from './editlist/app.editlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    EditlistComponent,
    AddCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    DndModule.forRoot()
  ],
  providers: [ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
