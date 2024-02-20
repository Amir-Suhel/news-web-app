import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { User } from '../models/user';
import { SignInRequest } from '../models/sign-in-request';
import { AuthResponse } from '../models/auth-response';
import { SIGNUP_URL, SIGNIN_URL } from '../models/constants';


fdescribe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should sign up a user', () => {
    const user: User = {
      username: 'testuser',
      fullName: 'Test User',
      email: 'testuser@example.com',
      password: 'password123',
    };

    userService.signUp(user).subscribe();

    const req = httpTestingController.expectOne(`${SIGNUP_URL}/users`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(user);

    req.flush({});
  });

  it('should sign in a user', () => {
    const signInRequest: SignInRequest = {
      username: 'testuser',
      password: 'password123',
    };

    const mockAuthResponse: AuthResponse = {
      token: 'mockToken',
      message: 'Authentication successful',
      userId: '123',
      username: 'testuser',
    };

    userService.signIn(signInRequest).subscribe((response) => {
      expect(response).toEqual(mockAuthResponse);
    });

    const req = httpTestingController.expectOne(`${SIGNIN_URL}/login`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(signInRequest);

    req.flush(mockAuthResponse);
  });
});


// import { TestBed } from '@angular/core/testing';

// import { UserService } from './user.service';

// describe('UserService', () => {
//   let service: UserService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(UserService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
