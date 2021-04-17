import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E1FooterComponent } from './e1-footer.component';

describe('E1FooterComponent', () => {
  let component: E1FooterComponent;
  let fixture: ComponentFixture<E1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
