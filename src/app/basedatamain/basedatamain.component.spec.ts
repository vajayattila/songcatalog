import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasedatamainComponent } from './basedata.component';

describe('BasedatamainComponent', () => {
  let component: BasedatamainComponent;
  let fixture: ComponentFixture<BasedatamainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasedatamainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasedatamainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
