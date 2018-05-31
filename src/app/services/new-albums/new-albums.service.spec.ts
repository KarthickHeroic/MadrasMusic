import { TestBed, inject } from '@angular/core/testing';

import { NewAlbumsService } from './new-albums.service';

describe('NewAlbumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewAlbumsService]
    });
  });

  it('should be created', inject([NewAlbumsService], (service: NewAlbumsService) => {
    expect(service).toBeTruthy();
  }));
});
