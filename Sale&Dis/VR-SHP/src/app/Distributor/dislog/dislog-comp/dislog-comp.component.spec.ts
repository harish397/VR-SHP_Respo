import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislogCompComponent } from './dislog-comp.component';

describe('DislogCompComponent', () => {
  let component: DislogCompComponent;
  let fixture: ComponentFixture<DislogCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislogCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DislogCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
