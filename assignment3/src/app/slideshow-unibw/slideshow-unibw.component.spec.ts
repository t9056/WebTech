import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowUnibwComponent } from './slideshow-unibw.component';

describe('SlideshowUnibwComponent', () => {
  let component: SlideshowUnibwComponent;
  let fixture: ComponentFixture<SlideshowUnibwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideshowUnibwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideshowUnibwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
