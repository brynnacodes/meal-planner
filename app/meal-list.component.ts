import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li *ngFor="let meal of childMealList">{{meal.name}} <button (click)="editButtonClicked(meal)">Edit meal</button></li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
