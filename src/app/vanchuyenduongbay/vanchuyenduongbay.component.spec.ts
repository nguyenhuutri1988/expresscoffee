import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanchuyenduongbayComponent } from './vanchuyenduongbay.component';

describe('VanchuyenduongbayComponent', () => {
  let component: VanchuyenduongbayComponent;
  let fixture: ComponentFixture<VanchuyenduongbayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanchuyenduongbayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanchuyenduongbayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
