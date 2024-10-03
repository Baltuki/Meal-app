import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealListComponent } from "./components/meal-list/meal-list.component";
import { HeaderComponent } from "./components/shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MealListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Meal-app';
}
