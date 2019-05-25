import { Component, OnInit } from '@angular/core';
import { Film } from '../classes/film';
import { Category } from '../classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../service/film.service';
import { CategoryService } from '../service/category.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-change-film',
  templateUrl: './change-film.page.html',
  styleUrls: ['./change-film.page.scss'],
})
export class ChangeFilmPage implements OnInit {
  public film: Film;
  public categorys: Category[];
  toast: any;

  
  constructor(private route: ActivatedRoute, 
    private service: FilmService, 
    private catservice: CategoryService, 
    private router: Router,
    public toastCtrl: ToastController) { }


  ngOnInit() {
    let id: number;
    id = Number(this.route.snapshot.paramMap.get('id'));
    this.film = this.service.getfilm(id);
    this.categorys = this.catservice.getcategorys();
  }

  change(){
    this.service.changefilm(this.film);

    this.toast = this.toastCtrl.create({
      message: 'Film modifié',
      duration: 1000,
      color: "success"
    }).then((toastData)=>{
      toastData.present();
    });

    this.router.navigateByUrl('/films');
  }
}
