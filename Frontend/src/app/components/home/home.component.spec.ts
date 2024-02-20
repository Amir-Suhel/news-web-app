import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { NewsService } from 'src/app/services/news.service';
import { of} from 'rxjs';
import { News } from 'src/app/models/news';
import { Article } from 'src/app/models/article'; // Make sure to import the Article type
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let newsService: NewsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [NewsService],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    newsService = TestBed.inject(NewsService);
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should populate topHeadLinesData after ngOnInit', () => {
    // Arrange
    const mockNews: News = {
      status: 'ok',
      totalResults: '3',
      articles: mockArticles
    };
    const spy = spyOn(newsService, 'topHeadlines').and.returnValue(of(mockNews));

    // Act
    component.ngOnInit();

    // Assert
    expect(spy).toHaveBeenCalled();
    expect(component.topHeadLinesData).toEqual(mockNews.articles);
  });

  // other test cases

  it('should open "Read More" link in a new tab', () => {
    // Arrange
    const mockNews: News = {
      status: 'ok',
      totalResults: '1',
      articles: [mockArticles[0]]
    };
    const spy = spyOn(newsService, 'topHeadlines').and.returnValue(of(mockNews));

    // Act
    component.ngOnInit();
    fixture.detectChanges();
    const readMoreLink = fixture.nativeElement.querySelector('.btn-dark');

    // Assert
    expect(spy).toHaveBeenCalled();
    expect(readMoreLink.getAttribute('target')).toBe('_blank');
  });

  
});

// Sample article data
const mockArticles: Article[] = [
  {
    source: { id: 1, name: 'Source1' },
    author: 'Author1',
    title: 'Title1',
    description: 'Description1',
    url: 'http://example.com/article1',
    urlToImage: 'image1.jpg',
    publishedAt: '2023-01-01T12:00:00Z',
    content: 'Content1'
  },
  
];


// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomeComponent } from './home.component';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [HomeComponent]
//     });
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
