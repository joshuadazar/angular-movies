import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaComoponentComponent } from './cta-comoponent.component';

describe('CtaComoponentComponent', () => {
  let component: CtaComoponentComponent;
  let fixture: ComponentFixture<CtaComoponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaComoponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtaComoponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
