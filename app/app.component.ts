import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div id="header" class="container-fluid"></div>
  <div class="container">
    <div id="title">
      <h1>Meal Tracker</h1>
      <h3>Today is: {{month}}/{{day}}/{{year}}</h3>
    </div>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <hr>
    <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishEditing()"></edit-meal>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
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
    new Meal('lasagna', 'sausage, noodles, basil, marinara', 336, '12:00pm'),
    new Meal('ice cream', 'mint chocolate chip', 300, '3:00pm'),
    new Meal('salad', 'lettuce, beets, carrots, goat cheese, vinagrette', 275, '6:30pm')
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
