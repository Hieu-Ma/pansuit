import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandambFormComponent } from './brandamb-form.component';

describe('BrandambFormComponent', () => {
  let component: BrandambFormComponent;
  let fixture: ComponentFixture<BrandambFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandambFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandambFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
