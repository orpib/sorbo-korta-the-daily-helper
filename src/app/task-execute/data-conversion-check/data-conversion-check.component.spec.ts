import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataConversionCheckComponent } from './data-conversion-check.component';

describe('DataConversionCheckComponent', () => {
  let component: DataConversionCheckComponent;
  let fixture: ComponentFixture<DataConversionCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataConversionCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataConversionCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
