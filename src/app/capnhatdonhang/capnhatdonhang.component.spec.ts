import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapnhatdonhangComponent } from './capnhatdonhang.component';

describe('CapnhatdonhangComponent', () => {
  let component: CapnhatdonhangComponent;
  let fixture: ComponentFixture<CapnhatdonhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapnhatdonhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapnhatdonhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
