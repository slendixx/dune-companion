import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroopsControlComponent } from './troops-control.component';

describe('TroopsControlComponent', () => {
  let component: TroopsControlComponent;
  let fixture: ComponentFixture<TroopsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroopsControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroopsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
