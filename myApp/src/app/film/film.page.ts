import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../service/film.service';
import { Film } from '../classes/film';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {
  public id: number;
  public film: Film;
  toast: any;
  

  constructor(private route: ActivatedRoute, 
    private service: FilmService, 
    private router: Router,
    public toastCtrl: ToastController) { }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.film = this.service.getfilm(this.id);
  }

  delete() {
    this.service.deletefilm(this.film.id);
    
    this.toast = this.toastCtrl.create({
      message: 'Film Supprimé',
      duration: 1000,
      color: "danger"
    }).then((toastData)=>{
      toastData.present();
    });
    this.router.navigateByUrl('/films');
  }

}
