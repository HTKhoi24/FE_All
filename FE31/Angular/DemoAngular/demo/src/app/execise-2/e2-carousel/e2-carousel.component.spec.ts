import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2CarouselComponent } from './e2-carousel.component';

describe('E2CarouselComponent', () => {
  let component: E2CarouselComponent;
  let fixture: ComponentFixture<E2CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
