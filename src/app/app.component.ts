import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealListComponent } from "./components/meal-list/meal-list.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { PopularFoodsComponent } from "./components/popular-foods/popular-foods.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MealListComponent, HeaderComponent, PopularFoodsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Meal-app';
}
