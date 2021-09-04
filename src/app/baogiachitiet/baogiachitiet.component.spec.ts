import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaogiachitietComponent } from './baogiachitiet.component';

describe('BaogiachitietComponent', () => {
  let component: BaogiachitietComponent;
  let fixture: ComponentFixture<BaogiachitietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaogiachitietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaogiachitietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
