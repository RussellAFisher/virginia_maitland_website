import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtSlideshowComponent } from './art-slideshow.component';

describe('ArtSlideshowComponent', () => {
  let component: ArtSlideshowComponent;
  let fixture: ComponentFixture<ArtSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtSlideshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
