import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeFilmPage } from './change-film.page';

describe('ChangeFilmPage', () => {
  let component: ChangeFilmPage;
  let fixture: ComponentFixture<ChangeFilmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeFilmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
