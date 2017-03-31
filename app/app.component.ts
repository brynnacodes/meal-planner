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
    <div>
      <h3>{{selectedMeal.name}}</h3>
      <h3>Edit Meal</h3>
      <label>Enter Meal Name:</label>
      <input [(ngModel)]="selectedMeal.name">
    </div>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();this;

  meals: Meal[] = [
    new Meal('lasagna', 'sausage, noodles, basil, marinara', 336, 'Thursday'),
    new Meal('ice cream', 'mint chocolate chip', 300, 'Thursday'),
    new Meal('salad', 'lettuce, beets, carrots, goat cheese, vinagrette', 275, 'Thursday')
  ];

  selectedMeal: Meal = this.meals[0];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }
}

  class Meal {
    constructor(public name: string, public details: string, public calories: number, public day: string) { }
  }
