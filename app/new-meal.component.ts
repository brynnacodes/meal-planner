import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div id="new-meal-header">
      <h1>Add New Meal</h1>
    </div>
    <div class="new-meal-form">
      <div class="form-group">
        <label>Enter meal name:</label>
        <input #newName><br>
      </div>
      <div class="form-group">
        <label>Enter meal details:</label>
        <input #newDetails><br>
      </div>
      <div class="form-group">
        <label>Enter meal calories:</label>
        <input #newCalories><br>
      </div>
      <div class="form-group">
        <label>Enter meal time:</label>
        <input #newTime><br>
      </div>
      <button class="btn" (click)="submitForm(newName.value, newDetails.value, newCalories.value, newTime.value); newName.value=''; newDetails.value=''; newCalories.value=''; newTime.value='';">Add meal</button>
    <div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number, time: string) {
    var newMealToAdd: Meal = new Meal(name, details, calories, time);
    this.newMealSender.emit(newMealToAdd);
  }
}
