import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderbannerComponent } from './sliderbanner.component';

describe('SliderbannerComponent', () => {
  let component: SliderbannerComponent;
  let fixture: ComponentFixture<SliderbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
