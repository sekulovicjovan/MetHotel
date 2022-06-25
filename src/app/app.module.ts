import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room/room.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { PipePipe } from './helpers/pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    RoomFormComponent,
    FilterComponent,
    PipePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
