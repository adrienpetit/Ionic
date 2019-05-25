import { Injectable } from '@angular/core';
import { Film } from '../classes/film';
import { Category } from '../classes/category';
import { FilmsPage } from '../films/films.page';
import { CategoryService } from '../service/category.service';



@Injectable({
  providedIn: 'root'
})

export class FilmService {
  public categorys: Category[] = this.catservice.getcategorys();

  private Resume =[
    "OSS 117",
    
  ];

  private Image =[
   "oss"
  ];

  private Links =[
    "https://youtu.be/k30wCE82640"
  ];

  public films: Film[] = [
    new Film(1, "Oss 117", " Michel Hazanavicius", this.Resume[0], this.Image[0],this.Links[0],this.categorys[0]),
    
  ];
  constructor(private catservice: CategoryService) { 

  }

  getfilm(id: number): Film {
    let movy: Film;
    this.films.forEach(film => {
      if (film.id == id) 
      {
        movy = film;
      }
    });
    return movy;
  }

  deletefilm(id: number) {
    this.films.forEach((film, index) => {
      if (film.id == id) {
        this.films.splice(index, 1);
      }
    });
  }

  changefilm(movy: Film) {
    let i: number;
    this.films.forEach(film => {
      if (film.id == movy.id) 
      {
        this.films[i] = movy;
      }
      i = i + 1;
    });
  }

  getfilms(): Film[] {
    return this.films;
  }

  getlastid(): number {
    let id: number;
    id = this.films[this.films.length - 1].id;
    return id;
  }

  createfilm(film :Films ){
    this.films.push(film);
  }
}
