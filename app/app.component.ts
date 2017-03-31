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
    new Meal('Bagel', 'seasame bagel with cream cheese and avocado', 336, '8:00am'),
    new Meal('Rice bowl', 'chicken and vegetable stir fry over rice', 510, '1:00pm'),
    new Meal('Salad', 'lettuce, beets, carrots, goat cheese, vinagrette', 275, '6:30pm')
  ];

  // Oninit() {
  //   totalCalories(masterMealList) {
  //     for (var i = 0; i < masterMealList.length; i++) {
  //       console.log(masterMealList[i]);
  //     }
  //   }
  // }

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
