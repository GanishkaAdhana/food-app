import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MithaiComponent } from './mithai.component';

describe('MithaiComponent', () => {
  let component: MithaiComponent;
  let fixture: ComponentFixture<MithaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MithaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MithaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
