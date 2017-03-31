import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { HealthinessPipe } from './healthiness.pipe';

@Component({
  selector: 'meal-list',
  template: `
  <div id="filter-buttons">
    <button class ="btn" value="all" (click)="setDesiredHealthiness($event.target.value)">View all meals</button>
    <button class ="btn" value="low" (click)="setDesiredHealthiness($event.target.value)">View meals over 500 calories</button>
    <button class ="btn" value="high" (click)="setDesiredHealthiness($event.target.value)">View meals under 500 calories</button>
  </div>
  <hr>
    <div *ngFor="let meal of childMealList | healthiness: desiredHealthiness">{{meal.name}} <button class="btn" (click)="editButtonClicked(meal)">Edit meal</button>
      <ul>
        <li>Calories: {{meal.calories}}</li>
        <li>Details: {{meal.details}}</li>
        <li>Eaten at: {{meal.time}}</li>
      </ul>
    </div>
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
