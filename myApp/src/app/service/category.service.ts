import { Injectable } from '@angular/core';
import { Category } from '../classes/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categorys: Category[] = [
    new Category(0, "Humour", "Film humouristique"),
    new Category(1, "Action", "Film d'action")
  ];
  
  
  constructor() { }

  getcategorys(): Category[] {
    return this.categorys;
  }

  getcategory(id: number): Category {
    let cat: Category;
    this.categorys.forEach(category => {
      if (category.id == id) 
      {
        cat = category;
      }
    });
    return cat;
  }

  deletecategory(id: number) {
    this.categorys.forEach((category, i) => {
      if (category.id == id) {
        this.categorys.splice(i, 1);
      }
    });
  }

  changecategory(id: number, newcats: Category) {
    let i: number;
    this.categorys.forEach(category => {
      if (category.id == id) 
      {
        this.categorys[i] = newcats;
      }
      i = i + 1;
    });
  }


  getlastid(): number {
    let id: number;
    id = this.categorys[this.categorys.length - 1].id;
    return id;
  }

  createcategory(category :Category ){
    this.categorys.push(category);
  }
}
