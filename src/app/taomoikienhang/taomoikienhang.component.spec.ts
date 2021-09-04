import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaomoikienhangComponent } from './taomoikienhang.component';

describe('TaomoikienhangComponent', () => {
  let component: TaomoikienhangComponent;
  let fixture: ComponentFixture<TaomoikienhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaomoikienhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaomoikienhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
