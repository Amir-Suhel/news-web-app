import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CurrentUser } from '../models/currentUser';

fdescribe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });

    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should get current user from local storage', () => {
    const mockCurrentUser: CurrentUser = {
      userId: 1,
      username: 'testuser',
      token: 'mockToken',
      message: 'User logged in',
    };

    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockCurrentUser));

    const result = authService.getCurrentUser();

    expect(result).toEqual(mockCurrentUser);
    expect(localStorage.getItem).toHaveBeenCalledWith('currentUser');
  });

  it('should set current user in local storage', () => {
    const mockCurrentUser: CurrentUser = {
      userId: 1,
      username: 'testuser',
      token: 'mockToken',
      message: 'User logged in',
    };

    spyOn(localStorage, 'setItem');

    authService.setCurrentUser(mockCurrentUser);

    expect(localStorage.setItem).toHaveBeenCalledWith('currentUser', JSON.stringify(mockCurrentUser));
  });

  it('should get token from local storage', () => {
    const mockToken = 'mockToken';

    spyOn(localStorage, 'getItem').and.returnValue(mockToken);

    const result = authService.getToken();

    expect(result).toEqual(mockToken);
    expect(localStorage.getItem).toHaveBeenCalledWith('token');
  });

  it('should set token in local storage', () => {
    const mockToken = 'mockToken';

    spyOn(localStorage, 'setItem');

    authService.setToken(mockToken);

    expect(localStorage.setItem).toHaveBeenCalledWith('token', mockToken);
  });

  it('should check if the user is logged in', () => {
    spyOn(authService, 'getToken').and.returnValue('mockToken');

    const result = authService.isLoggedIn();

    expect(result).toBe(true);
    expect(authService.getToken).toHaveBeenCalled();
  });

  it('should log out the user', () => {
    spyOn(localStorage, 'removeItem');
    spyOn(localStorage, 'clear').and.callThrough();

    const result = authService.logout();

    expect(result).toBe(true);
    expect(localStorage.removeItem).toHaveBeenCalledWith('token');
    expect(localStorage.clear).toHaveBeenCalled();
  });
});



// import { TestBed } from '@angular/core/testing';

// import { AuthService } from './auth.service';

// describe('AuthService', () => {
//   let service: AuthService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(AuthService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
