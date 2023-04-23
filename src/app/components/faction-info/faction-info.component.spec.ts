import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactionInfoComponent } from './faction-info.component';

describe('FactionInfoComponent', () => {
  let component: FactionInfoComponent;
  let fixture: ComponentFixture<FactionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactionInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
