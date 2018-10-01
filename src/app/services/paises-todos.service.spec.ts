import { TestBed } from '@angular/core/testing';

import { PaisesTodosService } from './paises-todos.service';

describe('PaisesTodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaisesTodosService = TestBed.get(PaisesTodosService);
    expect(service).toBeTruthy();
  });
});
