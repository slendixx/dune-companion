import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AtreidesInfoComponent} from './guild-info.component';

describe('AtreidesInfoComponent', () => {
  let component: AtreidesInfoComponent;
  let fixture: ComponentFixture<AtreidesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtreidesInfoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AtreidesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
