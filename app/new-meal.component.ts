import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h1>Add New Meal</h1>
    <div class="new-meal-form">
      <label>Enter meal name:</label>
      <input #newName><br>

      <label>Enter meal details:</label>
      <input #newDetails><br>

      <label>Enter meal calories:</label>
      <input #newCalories><br>

      <label>Enter meal day:</label>
      <input #newDay>
      <button (click)="submitForm(newName.value, newDetails.value, newCalories.value, newDay.value); newName.value=''; newDetails.value=''; newCalories.value=''; newDay.value='';">Add meal</button>
    <div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number, day: string) {
    var newMealToAdd: Meal = new Meal(name, details, calories, day);
    this.newMealSender.emit(newMealToAdd);
  }
}
