import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3>Today's date: {{month}}/{{day}}/{{year}}</h3>
    <ul> Meal
      <li>Name: {{firstMeal.name}}</li>
      <li>Details: {{firstMeal.details}}</li>
      <li>Calories: {{firstMeal.calories}}</li>
      <li>Day: {{firstMeal.day}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();this;

  firstMeal: Meal = {
    name: 'lasagna',
    details: 'sausage, noodles, basil, marinara',
    calories: 336,
    day: 'Thursday'
  }
}

  class Meal {
    constructor(public name: string, public details: string, public calories: number, public day: string) { }
  }
