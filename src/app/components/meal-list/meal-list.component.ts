import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MealService } from '../../services/meal.service';
import { NgIf, NgFor } from '@angular/common';
import { mealResults } from '../../interfaces/meal';

@Component({
  selector: 'app-meal-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.css'
})
export class MealListComponent implements OnInit {
  meals: mealResults[]=[];

  constructor( private mealService : MealService){}


  ngOnInit(): void {
    this.mealService.getMealList().subscribe(
      (data: any) => {
        this.meals = data.meals.map((meal: any) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb
        }));
      },
      (error) => {
        console.error(error);
      }
    );


  }

}
