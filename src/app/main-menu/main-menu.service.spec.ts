import { TestBed, inject } from '@angular/core/testing';

import { MainMenuService } from './main-menu.service';

describe('MainMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainMenuService]
    });
  });

  it('should ...', inject([MainMenuService], (service: MainMenuService) => {
    expect(service).toBeTruthy();
  }));
});
