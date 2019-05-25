import { Component, OnInit } from '@angular/core';
import { Film } from '../classes/film';
import { FilmService } from '../service/film.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../classes/category';
import { CategoryService } from '../service/category.service';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.page.html',
  styleUrls: ['./create-film.page.scss'],
})
export class CreateFilmPage implements OnInit {
  public newfilm: Film;
  public categorys: Category[];
  public cat: Category;
  toast: any;


  constructor(private route: ActivatedRoute, 
    private service: FilmService, 
    private catservice: CategoryService, 
    private router: Router,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    let id: number;
    id = this.service.getlastid() + 1;
    this.categorys = this.catservice.getcategorys();
    this.newfilm = new Film(id, ""," ", "", "", "", this.categorys[0]);
  }

  create(){
    this.service.createfilm(this.newfilm);

    this.toast = this.toastCtrl.create({
      message: 'Nouveau film crée',
      duration: 1000,
      color: "success"
    }).then((toastData)=>{
      toastData.present();
    });

    this.router.navigateByUrl('/films');
  }

}
