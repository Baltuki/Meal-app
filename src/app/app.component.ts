import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealListComponent } from "./components/meal-list/meal-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MealListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Meal-app';
}
