import { Component } from '@angular/core';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark it as standalone
  imports: [TodolistComponent, FormsModule],  // Import TodolistComponent and FormsModule directly
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
}
