import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlykienhangComponent } from './quanlykienhang.component';

describe('QuanlykienhangComponent', () => {
  let component: QuanlykienhangComponent;
  let fixture: ComponentFixture<QuanlykienhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlykienhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlykienhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
