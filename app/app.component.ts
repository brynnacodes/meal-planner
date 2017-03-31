import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3>Today's date: {{month}}/{{day}}/{{year}}</h3>
    <ul>
      <li *ngFor="let meal of meals">{{meal.name}}</li>
    </ul>
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
    new Meal('lasagna', 'sausage, noodles, basil, marinara', 336, 'Thursday'),
    new Meal('lasagna', 'sausage, noodles, basil, marinara', 336, 'Thursday')
  ];
}

  class Meal {
    constructor(public name: string, public details: string, public calories: number, public day: string) { }
  }
