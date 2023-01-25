import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check checkout button is disabled when cart is empty', ()=>{
    component.isCartEmpty=true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#checkout')).nativeElement.disabled).toBeTruthy();
  });

  it('should check emptycart button is disabled when cart is empty', ()=>{
    component.isCartEmpty=true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#emptycart')).nativeElement.disabled).toBeTruthy();
  });
});
