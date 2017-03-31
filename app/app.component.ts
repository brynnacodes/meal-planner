import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker for {{month}}/{{day}}/{{year}}</h1>

    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>

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

  masterMealList: Meal[] = [
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
