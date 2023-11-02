/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UseresService } from './useres.service';

describe('Service: Useres', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseresService]
    });
  });

  it('should ...', inject([UseresService], (service: UseresService) => {
    expect(service).toBeTruthy();
  }));
});
