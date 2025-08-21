import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alliance } from './alliance';

describe('Alliance', () => {
  let component: Alliance;
  let fixture: ComponentFixture<Alliance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alliance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alliance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
