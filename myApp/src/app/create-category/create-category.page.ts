import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import { CategoryService } from '../service/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from '../classes/category';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.page.html',
  styleUrls: ['./create-category.page.scss'],
})
export class CreateCategoryPage implements OnInit {

  public categorys: Category[];
  public cat: Category;
  toast: any;


  constructor(private route: ActivatedRoute, 
    private catservice: CategoryService, 
    private router: Router,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    let id: number;
    id = this.catservice.getlastid() + 1;
    this.categorys = this.catservice.getcategorys();
    this.cat = new Category(id, "","");

  }

  create(){
    this.catservice.createcategory(this.cat);
    
    this.toast = this.toastCtrl.create({
      message: 'Nouvelle catégorie créée',
      duration: 1000,
      color: "success"
    }).then((toastData)=>{
      toastData.present();
    });

    this.router.navigateByUrl('/categorys');
  }

}
