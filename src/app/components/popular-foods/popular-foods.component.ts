import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MealService } from '../../services/meal.service';
import { NgIf, NgFor } from '@angular/common';
import { mealResults } from '../../interfaces/meal';
import { MealListComponent } from '../meal-list/meal-list.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';



@Component({
  selector: 'app-popular-foods',
  standalone: true,
  imports: [],
  templateUrl: './popular-foods.component.html',
  styleUrl: './popular-foods.component.css'
})
export class PopularFoodsComponent implements OnInit{
  meals: mealResults[]=[];

  constructor( private mealService : MealService){}


  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

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


