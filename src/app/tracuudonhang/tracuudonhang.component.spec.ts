import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracuudonhangComponent } from './tracuudonhang.component';

describe('TracuudonhangComponent', () => {
  let component: TracuudonhangComponent;
  let fixture: ComponentFixture<TracuudonhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TracuudonhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TracuudonhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
