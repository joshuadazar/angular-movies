import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationFlagComponent } from './authentication-flag.component';

describe('AuthenticationFlagComponent', () => {
  let component: AuthenticationFlagComponent;
  let fixture: ComponentFixture<AuthenticationFlagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationFlagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthenticationFlagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
