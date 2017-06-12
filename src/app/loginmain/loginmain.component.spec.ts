import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmainComponent } from './loginmain.component';

describe('LoginmainComponent', () => {
  let component: LoginmainComponent;
  let fixture: ComponentFixture<LoginmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
