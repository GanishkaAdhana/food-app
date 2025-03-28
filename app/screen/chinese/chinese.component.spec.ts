import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseComponent } from './chinese.component';

describe('ChineseComponent', () => {
  let component: ChineseComponent;
  let fixture: ComponentFixture<ChineseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChineseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChineseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
