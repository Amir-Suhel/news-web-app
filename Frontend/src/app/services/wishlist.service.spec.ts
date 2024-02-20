// import { TestBed } from '@angular/core/testing';

// import { WishlistService } from './wishlist.service';

// describe('WishlistService', () => {
//   let service: WishlistService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(WishlistService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WishlistService } from './wishlist.service';
import { ArticleResponse } from '../models/article-response';
import { WISHLIST_ADD_URL, WISHLIST_DELETE_URL, WISHLIST_GET_URL } from '../models/constants';

fdescribe('WishlistService', () => {
  let service: WishlistService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WishlistService]
    });

    service = TestBed.inject(WishlistService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an article to the wishlist', () => {
    const mockArticle: ArticleResponse = {
      id: 1,
      userId: 123,
      author: 'John Doe',
      title: 'Mock Article',
      description: 'This is a mock article for testing.',
      url: 'https://example.com',
      urlToImage: 'https://example.com/image.jpg',
      publishedAt: '2023-01-01T12:00:00Z',
      content: 'Mock article content.'
    };

    service.addArticle(mockArticle).subscribe();

    const req = httpTestingController.expectOne(WISHLIST_ADD_URL);
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should show articles by user', () => {
    const userId = 123;
  
    const mockArticles: ArticleResponse[] = [
      {
        id: 1,
        userId: userId,
        author: 'John Doe',
        title: 'Article 1',
        description: 'Description for Article 1',
        url: 'https://example.com/article1',
        urlToImage: 'https://example.com/image1.jpg',
        publishedAt: '2023-01-01T12:00:00Z',
        content: 'Content for Article 1'
      },
      {
        id: 2,
        userId: userId,
        author: 'Jane Doe',
        title: 'Article 2',
        description: 'Description for Article 2',
        url: 'https://example.com/article2',
        urlToImage: 'https://example.com/image2.jpg',
        publishedAt: '2023-01-02T12:00:00Z',
        content: 'Content for Article 2'
      }
     
    ];
  
    service.showArticlesByUser(userId).subscribe(articles => {
      expect(articles).toEqual(mockArticles);
    });
  
    const req = httpTestingController.expectOne(WISHLIST_GET_URL +'/' + userId);
    expect(req.request.method).toBe('GET');
    req.flush(mockArticles);
  });

  it('should remove an article from the wishlist', () => {
    const userId = 456;
    const id = 789;

    service.removeArticleFromWishlist(userId, id).subscribe();

    const req = httpTestingController.expectOne(WISHLIST_DELETE_URL + '/' + userId + '/id/' + id);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
