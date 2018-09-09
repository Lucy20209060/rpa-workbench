import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppApplyComponent } from './app-apply.component';

describe('AppApplyComponent', () => {
  let component: AppApplyComponent;
  let fixture: ComponentFixture<AppApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
