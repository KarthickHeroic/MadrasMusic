import { TestBed, inject } from '@angular/core/testing';

import { GetsongsService } from './getsongs.service';

describe('GetsongsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetsongsService]
    });
  });

  it('should be created', inject([GetsongsService], (service: GetsongsService) => {
    expect(service).toBeTruthy();
  }));
});
