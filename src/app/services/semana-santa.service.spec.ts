import { TestBed } from '@angular/core/testing';

import { SemanaSantaService } from './semana-santa.service';

describe('SemanaSantaService', () => {
  let service: SemanaSantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemanaSantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
