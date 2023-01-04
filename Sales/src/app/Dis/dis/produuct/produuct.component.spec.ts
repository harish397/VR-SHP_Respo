import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduuctComponent } from './produuct.component';

describe('ProduuctComponent', () => {
  let component: ProduuctComponent;
  let fixture: ComponentFixture<ProduuctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduuctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
