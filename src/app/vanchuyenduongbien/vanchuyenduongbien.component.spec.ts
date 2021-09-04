import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanchuyenduongbienComponent } from './vanchuyenduongbien.component';

describe('VanchuyenduongbienComponent', () => {
  let component: VanchuyenduongbienComponent;
  let fixture: ComponentFixture<VanchuyenduongbienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanchuyenduongbienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanchuyenduongbienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
