import { TestBed, inject } from '@angular/core/testing';

import { Services/login/loginService } from './services/login/login.service';

describe('Services/login/loginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Services/login/loginService]
    });
  });

  it('should be created', inject([Services/login/loginService], (service: Services/login/loginService) => {
    expect(service).toBeTruthy();
  }));
});
