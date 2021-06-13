import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticantLoginComponent } from './practicant-login.component';

describe('PracticantLoginComponent', () => {
  let component: PracticantLoginComponent;
  let fixture: ComponentFixture<PracticantLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticantLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticantLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
