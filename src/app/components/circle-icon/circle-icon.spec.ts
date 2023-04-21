import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleIcon } from './circle-icon';

describe('TroopIconComponent', () => {
  let component: CircleIcon;
  let fixture: ComponentFixture<CircleIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleIcon ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
