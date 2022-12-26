import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizerLoginComponent } from './authorizer-login.component';

describe('AuthorizerLoginComponent', () => {
  let component: AuthorizerLoginComponent;
  let fixture: ComponentFixture<AuthorizerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
