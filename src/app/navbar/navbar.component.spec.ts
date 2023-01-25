import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports:[FormsModule,ReactiveFormsModule,RouterModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check home navbar',()=>{
    const el = fixture.debugElement.query(By.css('.nav-link'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#home')).toBeTrue;
  });
   it('should check veges navbar',()=>{
    const el = fixture.debugElement.query(By.css('.nav-link'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#veges')).toBeTrue;
  });
  it('should check aboutus navbar',()=>{
    const el = fixture.debugElement.query(By.css('.nav-link'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#aboutus')).toBeTrue;
  });
  it('should check contactus navbar',()=>{
    const el = fixture.debugElement.query(By.css('.nav-link'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#contactus')).toBeTrue;
  });
  it('should check login button',()=>{
    const el = fixture.debugElement.query(By.css('.btn.btn-dark'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#login')).toBeTrue;
  });
  it('should check cart button',()=>{
    const el = fixture.debugElement.query(By.css('.btn.btn-light'));
    expect(el).toBeTruthy();
    expect(el.nativeElement.getAttribute('#cart')).toBeTrue;
  });
});
