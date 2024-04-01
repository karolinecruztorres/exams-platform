import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorSupportComponent } from './tutor-support.component';

describe('TutorSupportComponent', () => {
  let component: TutorSupportComponent;
  let fixture: ComponentFixture<TutorSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
