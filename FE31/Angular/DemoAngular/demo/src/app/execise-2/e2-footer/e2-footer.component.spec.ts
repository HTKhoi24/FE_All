import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E2FooterComponent } from './e2-footer.component';

describe('E2FooterComponent', () => {
  let component: E2FooterComponent;
  let fixture: ComponentFixture<E2FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E2FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
