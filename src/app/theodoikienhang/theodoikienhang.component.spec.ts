import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheodoikienhangComponent } from './theodoikienhang.component';

describe('TheodoikienhangComponent', () => {
  let component: TheodoikienhangComponent;
  let fixture: ComponentFixture<TheodoikienhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheodoikienhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheodoikienhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
