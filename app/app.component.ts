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
      <button class="btn" (click)="totalCalories()">Total calories</button>
      <h3 id="total"></h3>
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
  masterMealList: Meal[] = [];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
  
  totalCalories() {
    var total: number = 0;
    for (var i = 0; i < this.masterMealList.length; i++) {
       total += parseInt(this.masterMealList[i].calories);
    }

    var totalNumber = total.toString();
    document.getElementById("total").innerHTML = totalNumber;
  }
}
