import { FilmPage } from '../film/film.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../service/film.service';
import { Film } from '../classes/film';

@Component({
  selector: 'app-film',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {
  films: Film[];
  
  constructor(private route: ActivatedRoute, 
    private service: FilmService, 
    private router: Router) {

  }

  ngOnInit() {
    this.films = this.service.getfilms();
  }

}
