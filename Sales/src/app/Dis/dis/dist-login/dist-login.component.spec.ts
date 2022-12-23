import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistLoginComponent } from './dist-login.component';

describe('DistLoginComponent', () => {
  let component: DistLoginComponent;
  let fixture: ComponentFixture<DistLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
