import { TestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsService } from './news.service';
import { News } from '../models/news';
import { Source } from '../models/source';
import { NEWS_EXTERNAL, NEWS_URL } from '../models/constants';


fdescribe('NewsService', () => {
  let service: NewsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService]
    });

    service = TestBed.inject(NewsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get top headlines', () => {
    const mockNews: News = {
      status: 'ok',
      totalResults: '2',
      articles: [
        {
          source: { id: 1, name: 'Source 1' } as Source,
          author: 'Author 1',
          title: 'Title 1',
          description: 'Description 1',
          url: 'https://example.com/1',
          urlToImage: 'https://example.com/image1.jpg',
          publishedAt: '2023-01-01T12:00:00Z',
          content: 'Content 1'
        },
        
      ]
    };

    service.topHeadlines().subscribe(news => {
      expect(news).toEqual(mockNews);
    });

    const req = httpTestingController.expectOne(NEWS_EXTERNAL);
    expect(req.request.method).toBe('GET');
    req.flush(mockNews);
  });

  it('should get news by keyword', () => {
    const keyword = 'Bitcoin';
    const mockNews: News = {
      status: 'ok',
      totalResults: '1',
      articles: [
        {
          source: { id: 1, name: 'Source 1' } as Source,
          author: 'Author 1',
          title: 'Title 1',
          description: 'Description 1',
          url: 'https://example.com/1',
          urlToImage: 'https://example.com/image1.jpg',
          publishedAt: '2023-01-01T12:00:00Z',
          content: 'Content 1'
        }
        // Add more articles as needed
      ]
    };

    service.getNewsByKeyword(keyword).subscribe(news => {
      expect(news).toEqual(mockNews);
    });

    const req = httpTestingController.expectOne(`${NEWS_URL}/${keyword}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockNews);
  });
});



// import { TestBed } from '@angular/core/testing';

// import { NewsService } from './news.service';

// describe('NewsService', () => {
//   let service: NewsService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(NewsService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
