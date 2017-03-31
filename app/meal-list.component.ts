import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { HealthinessPipe } from './healthiness.pipe';

@Component({
  selector: 'meal-list',
  template: `
  <button class ="btn" value="all" (click)="setDesiredHealthiness($event.target.value)">View all meals</button>
  <button class ="btn" value="low" (click)="setDesiredHealthiness($event.target.value)">View meals over 400 calories</button>
  <button class ="btn" value="high" (click)="setDesiredHealthiness($event.target.value)">View meals under 400 calories</button>

  <ul>
    <li *ngFor="let meal of childMealList | healthiness: desiredHealthiness">{{meal.name}} <button (click)="editButtonClicked(meal)">Edit meal</button></li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  desiredHealthiness: string = "all";

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  setDesiredHealthiness(healthiness) {
    this.desiredHealthiness = healthiness;
  }
}
