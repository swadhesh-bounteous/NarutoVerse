import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageCardComponent } from './village-card.component';

describe('VillageCardComponent', () => {
  let component: VillageCardComponent;
  let fixture: ComponentFixture<VillageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VillageCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VillageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
