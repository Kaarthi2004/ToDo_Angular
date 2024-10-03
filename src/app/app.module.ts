import { NgModule } from '@angular/core';
import { TodolistComponent } from './todolist/todolist.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    TodolistComponent  // Import the standalone component here
  ],
})
export class AppModule { }
