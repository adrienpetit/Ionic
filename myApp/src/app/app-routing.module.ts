import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'films', loadChildren: './films/films.module#FilmsPageModule' },
  { path: 'film/:id', loadChildren: './film/film.module#FilmPageModule' },
  { path: 'categorys', loadChildren: './categorys/categorys.module#CategorysPageModule' },
  { path: 'create-film', loadChildren: './create-film/create-film.module#CreateFilmPageModule' },
  { path: 'change-film/:id', loadChildren: './change-film/change-film.module#ChangeFilmPageModule' },
  { path: 'change-category/:id', loadChildren: './change-category/change-category.module#ChangeCategoryPageModule' },
  { path: 'create-category', loadChildren: './create-category/create-category.module#CreateCategoryPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
