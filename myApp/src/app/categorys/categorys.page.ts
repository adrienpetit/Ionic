import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../service/film.service';
import { Category } from '../classes/category';
import { CategoryService } from '../service/category.service';


@Component({
  selector: 'app-categorys',
  templateUrl: './categorys.page.html',
  styleUrls: ['./categorys.page.scss'],
})
export class CategorysPage implements OnInit {
  public categorys: Category[];

  constructor(private route: ActivatedRoute, 
    private catservice: CategoryService,
    private router: Router) {

  }

  ngOnInit() {
    this.categorys = this.catservice.getcategorys();
  }

}
