import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachkienhangComponent } from './danhsachkienhang.component';

describe('DanhsachkienhangComponent', () => {
  let component: DanhsachkienhangComponent;
  let fixture: ComponentFixture<DanhsachkienhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachkienhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachkienhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
