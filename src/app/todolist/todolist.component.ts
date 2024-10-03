import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf and *ngFor

@Component({
  selector: 'app-todolist',
  standalone: true,
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  imports: [FormsModule, CommonModule]  // Import both FormsModule and CommonModule
})
export class TodolistComponent implements OnInit {

  taskArray = [{ taskName: 'Yoga', isCompleted: false }];

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    });

    form.reset();  // Reset the form after submission
  }

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);  // Remove task from the array
  }

  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;  // Toggle task completion
  }
}
