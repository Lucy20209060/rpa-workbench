import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotUnattendedComponent } from './robot-unattended.component';

describe('RobotUnattendedComponent', () => {
  let component: RobotUnattendedComponent;
  let fixture: ComponentFixture<RobotUnattendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotUnattendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotUnattendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
