import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModalPage } from './material-modal.page';

describe('MaterialModalPage', () => {
  let component: MaterialModalPage;
  let fixture: ComponentFixture<MaterialModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
