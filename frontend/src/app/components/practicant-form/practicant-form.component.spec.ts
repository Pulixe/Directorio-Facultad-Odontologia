import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticantFormComponent } from './practicant-form.component';

describe('PracticantFormComponent', () => {
  let component: PracticantFormComponent;
  let fixture: ComponentFixture<PracticantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticantFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
