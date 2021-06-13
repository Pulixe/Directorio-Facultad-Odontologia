import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticantBiogComponent } from './practicant-biog.component';

describe('PracticantBiogComponent', () => {
  let component: PracticantBiogComponent;
  let fixture: ComponentFixture<PracticantBiogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticantBiogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticantBiogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
