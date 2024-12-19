import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailedBeastCardComponent } from './tailed-beast-card.component';

describe('TailedBeastCardComponent', () => {
  let component: TailedBeastCardComponent;
  let fixture: ComponentFixture<TailedBeastCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TailedBeastCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailedBeastCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
