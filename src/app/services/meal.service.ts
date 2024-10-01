import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private apiUrl=(`https://www.themealdb.com/api/json/v1/1/search.php?f=g`);
  




  constructor(private http: HttpClient) { }

  getMealList(): Observable<any>{
    return this.http.get<any[]>(this.apiUrl);
  }
  

}
