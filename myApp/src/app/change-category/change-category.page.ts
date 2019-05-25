import { Component, OnInit } from '@angular/core';
import { Film } from '../classes/film';
import { Category } from '../classes/category';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../service/film.service';
import { CategoryService } from '../service/category.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-change-category',
  templateUrl: './change-category.page.html',
  styleUrls: ['./change-category.page.scss'],
})
export class ChangeCategoryPage implements OnInit {
  public cat: Category;
  toast: any;

  
  constructor(private route: ActivatedRoute, 
    private catservice: CategoryService, 
    private router: Router,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    let id: number;
    id = Number(this.route.snapshot.paramMap.get('id'));
    this.cat = this.catservice.getcategory(id);
  }

  change(){
    this.catservice.changecategory(this.cat.id,this.cat);

    this.toast = this.toastCtrl.create({
      message: 'Catégorie modifiée',
      duration: 1000,
      color: "success"
    }).then((toastData)=>{
      toastData.present();
    });

    this.router.navigateByUrl('/categorys');
  }

  delete(){
    this.catservice.deletecategory(this.cat.id);

    this.toast = this.toastCtrl.create({
      message: 'Catégorie Supprimée',
      duration: 1000,
      color: "danger"
    }).then((toastData)=>{
      toastData.present();
    });

    this.router.navigateByUrl('/categorys');
  }

}
