import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartIndexComponent } from './shopping-cart-index.component';

describe('ShoppingCartIndexComponent', () => {
  let component: ShoppingCartIndexComponent;
  let fixture: ComponentFixture<ShoppingCartIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
