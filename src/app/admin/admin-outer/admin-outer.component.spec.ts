import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOuterComponent } from './admin-outer.component';

describe('AdminOuterComponent', () => {
  let component: AdminOuterComponent;
  let fixture: ComponentFixture<AdminOuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminOuterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
