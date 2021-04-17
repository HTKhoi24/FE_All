import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E1SidebarComponent } from './e1-sidebar.component';

describe('E1SidebarComponent', () => {
  let component: E1SidebarComponent;
  let fixture: ComponentFixture<E1SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E1SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E1SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
