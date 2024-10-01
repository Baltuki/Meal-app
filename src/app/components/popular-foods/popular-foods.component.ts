import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MealService } from '../../services/meal.service';
import { NgIf, NgFor } from '@angular/common';
import { mealResults } from '../../interfaces/meal';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-popular-foods',
  standalone: true,
  imports: [NgFor, SlickCarouselModule],
  templateUrl: './popular-foods.component.html',
  styleUrl: './popular-foods.component.css'
})
export class PopularFoodsComponent implements OnInit{
  meals: mealResults[]=[];

  constructor( private mealService : MealService){}


  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true, // Opción para que el carrusel sea infinito
    dots: true,     // Opción para mostrar puntos de navegación
    arrows: true,   // Opción para mostrar las flechas de navegación
    responsive: [
      {
        breakpoint: 1024, // Para pantallas de hasta 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // Para pantallas de hasta 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480, // Para pantallas de hasta 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
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


