import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { MealListComponent }  from './meal-list.component';
import { EditMealComponent} from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { HealthinessPipe } from './healthiness.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MealListComponent, EditMealComponent, NewMealComponent, HealthinessPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
