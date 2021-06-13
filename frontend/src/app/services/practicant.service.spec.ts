import { TestBed } from '@angular/core/testing';

import { PracticantService } from './practicant.service';

describe('PracticantService', () => {
  let service: PracticantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
