import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFilmPage } from './create-film.page';

describe('CreateFilmPage', () => {
  let component: CreateFilmPage;
  let fixture: ComponentFixture<CreateFilmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMusiquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
