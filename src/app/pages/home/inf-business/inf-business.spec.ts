import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfBusiness } from './inf-business';

describe('InfBusiness', () => {
  let component: InfBusiness;
  let fixture: ComponentFixture<InfBusiness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfBusiness]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfBusiness);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
