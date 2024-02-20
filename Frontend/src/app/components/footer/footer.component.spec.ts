import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

fdescribe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a footer with background color, text color, and padding', () => {
    const footerElement: HTMLElement = fixture.nativeElement.querySelector('footer');

    expect(footerElement).toBeTruthy();
    expect(getComputedStyle(footerElement).backgroundColor).toBe('rgb(51, 51, 51)');
    expect(getComputedStyle(footerElement).color).toBe('rgb(255, 255, 255)');
    expect(getComputedStyle(footerElement).padding).toBe('20px');
  });

  it('should have centered text in the footer', () => {
    const footerElement: HTMLElement = fixture.nativeElement.querySelector('footer');

    expect(getComputedStyle(footerElement).textAlign).toBe('center');
  });

  it('should be fixed at the bottom', () => {
    const footerElement: HTMLElement = fixture.nativeElement.querySelector('footer');

    expect(getComputedStyle(footerElement).position).toBe('fixed');
    expect(getComputedStyle(footerElement).bottom).toBe('0px');
  });

  // it('should have a width of 100%', () => {
  //   const footerElement: HTMLElement = fixture.nativeElement.querySelector('footer');

  //   expect(getComputedStyle(footerElement).width).toBe('100%');
  // });

  it('should have links with white color and no text decoration', () => {
    const linkElements: NodeListOf<HTMLAnchorElement> = fixture.nativeElement.querySelectorAll('a');

    linkElements.forEach((link) => {
      // Get only the expected part of the textDecoration property
      const expectedTextDecoration = 'none';

      expect(getComputedStyle(link).color).toBe('rgb(255, 255, 255)');
      expect(getComputedStyle(link).textDecoration.includes(expectedTextDecoration)).toBeTruthy();
    });
  });

  // it('should have underlined text on hover for links', () => {
  //   const linkElements: NodeListOf<HTMLAnchorElement> = fixture.nativeElement.querySelectorAll('a');

  //   linkElements.forEach((link) => {
  //     const event = new MouseEvent('mouseover');
  //     link.dispatchEvent(event);

  //     expect(getComputedStyle(link).textDecoration).toBe('underline');
  //   });
  // });

  it('should display the correct footer content', () => {
    const pElement: HTMLParagraphElement = fixture.nativeElement.querySelector('p');

    expect(pElement.textContent).toContain('© 2023 NEWS API ORG | Privacy Policy | Terms of Service');
  });
});



// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { FooterComponent } from './footer.component';

// describe('FooterComponent', () => {
//   let component: FooterComponent;
//   let fixture: ComponentFixture<FooterComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [FooterComponent]
//     });
//     fixture = TestBed.createComponent(FooterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
