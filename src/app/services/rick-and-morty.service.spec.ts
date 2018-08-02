import { TestBed, inject } from '@angular/core/testing';

import { RickAndMortyService } from './rick-and-morty.service';

describe('RickAndMortyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RickAndMortyService]
    });
  });

  it('should be created', inject([RickAndMortyService], (service: RickAndMortyService) => {
    expect(service).toBeTruthy();
  }));
});
