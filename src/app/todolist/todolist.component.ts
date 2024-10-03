import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  imports: [FormsModule, CommonModule]
})
export class TodolistComponent implements OnInit {

  taskArray: { taskName: string, isCompleted: boolean }[] = [];
  editingTaskIndex: number | null = null;  // Keep track of which task is being edited
  editedTaskName: string = '';  // Store the updated task name during editing

  constructor() { }

  ngOnInit(): void {
    this.loadTasksFromLocalStorage();  // Load tasks when component initializes
  }

  onSubmit(form: NgForm) {
    const newTask = {
      taskName: form.controls['task'].value,
      isCompleted: false,
    };

    this.taskArray.push(newTask);
    this.saveTasksToLocalStorage();  // Save tasks to local storage
    form.reset();  // Reset the form after submission
    console.log(this.taskArray);
  }

  onDelete(index: number) {
    this.taskArray.splice(index, 1);  // Remove task from the array
    this.saveTasksToLocalStorage();  // Save updated tasks to local storage
    console.log(this.taskArray);
  }

  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;  // Toggle task completion
    this.saveTasksToLocalStorage();  // Save updated tasks to local storage
  }

  onEdit(index: number) {
    this.editingTaskIndex = index;  // Set the task to be edited
    this.editedTaskName = this.taskArray[index].taskName;  // Pre-fill the input with the current task name
  }

  onUpdate(index: number) {
    if (this.editedTaskName.trim()) {
      this.taskArray[index].taskName = this.editedTaskName;  // Update the task with the new name
      this.saveTasksToLocalStorage();  // Save updated tasks to local storage
      this.editingTaskIndex = null;  // Exit editing mode
      console.log(this.taskArray);
    }
  }

  onCancelEdit() {
    this.editingTaskIndex = null;  // Cancel the editing mode
  }

  saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));  // Save the task array as a string
    console.log(this.taskArray);
  }

  loadTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');  // Get the task string from local storage
    if (tasks) {
      this.taskArray = JSON.parse(tasks);  // Parse the string back into an array of tasks
    }
  }
}
