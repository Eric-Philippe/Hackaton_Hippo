import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTestComponent } from './activity-test.component';

describe('ActivityTestComponent', () => {
  let component: ActivityTestComponent;
  let fixture: ComponentFixture<ActivityTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
