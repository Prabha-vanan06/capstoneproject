import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ContactusComponent } from './contactus.component';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusComponent ],
      imports:[FormsModule,ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check fname and have fname type as text',()=>{
    
    const el=fixture.debugElement.query(By.css('#fname'))
    expect(el).toBeTruthy();
    
  });
  it('should check lname and have lname type as text',()=>{
    const el=fixture.debugElement.query(By.css('#lname'))
    expect(el).toBeTruthy();
    
  });
 
  it('should have email type as email',()=>{ 
    const el=fixture.debugElement.query(By.css('#email'))
    expect(el).toBeTruthy();
    
  });

  it('should have commands ',()=>{ 
    const el=fixture.debugElement.query(By.css('#commands'))
    expect(el).toBeTruthy();
    
  });
});
