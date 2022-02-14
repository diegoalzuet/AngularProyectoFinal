import { TestBed } from '@angular/core/testing';

import { ProtectedRouteGuard } from './protected-route.guard';

describe('ProtectedRouteGuard', () => {
  let guard: ProtectedRouteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectedRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
