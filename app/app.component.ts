import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3>Today's date: {{month}}/{{day}}/{{year}}</h3>
    <ul>
      <li *ngFor="let meal of meals">{{meal.name}} <button (click)="editMeal(meal)">Edit meal</button></li>
    </ul>
    <hr>
    <div *ngIf="selectedMeal" class="edit-meal">
      <h2>Edit meal</h2>
      <h3>{{selectedMeal.name}}</h3>

      <label>Enter meal name:</label>
      <input [(ngModel)]="selectedMeal.name"><br>

      <label>Enter meal details:</label>
      <input [(ngModel)]="selectedMeal.details"><br>

      <label>Enter meal calories:</label>
      <input [(ngModel)]="selectedMeal.calories"><br>

      <label>Enter meal day:</label>
      <input [(ngModel)]="selectedMeal.day">
      <button (click)="finishEditing()">Done</button>


    </div>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();this;
  selectedMeal = null;

  meals: Meal[] = [
    new Meal('lasagna', 'sausage, noodles, basil, marinara', 336, 'Thursday'),
    new Meal('ice cream', 'mint chocolate chip', 300, 'Thursday'),
    new Meal('salad', 'lettuce, beets, carrots, goat cheese, vinagrette', 275, 'Thursday')
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishEditing() {
    this.selectedMeal = null;
  }
}

  class Meal {
    constructor(public name: string, public details: string, public calories: number, public day: string) { }
  }
