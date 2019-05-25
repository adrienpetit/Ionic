import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysPage } from './categorys.page';

describe('CategorysPage', () => {
  let component: CategorysPage;
  let fixture: ComponentFixture<CategorysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorysPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
