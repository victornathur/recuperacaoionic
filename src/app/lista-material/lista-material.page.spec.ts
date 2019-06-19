import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaterialPage } from './lista-material.page';

describe('ListaMaterialPage', () => {
  let component: ListaMaterialPage;
  let fixture: ComponentFixture<ListaMaterialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaterialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
