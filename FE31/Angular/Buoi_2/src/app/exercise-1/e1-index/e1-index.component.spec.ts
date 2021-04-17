import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E1IndexComponent } from './e1-index.component';

describe('E1IndexComponent', () => {
  let component: E1IndexComponent;
  let fixture: ComponentFixture<E1IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E1IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E1IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
