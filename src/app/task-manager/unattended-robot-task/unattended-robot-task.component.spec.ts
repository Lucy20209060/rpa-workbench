import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnattendedRobotTaskComponent } from './unattended-robot-task.component';

describe('UnattendedRobotTaskComponent', () => {
  let component: UnattendedRobotTaskComponent;
  let fixture: ComponentFixture<UnattendedRobotTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnattendedRobotTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnattendedRobotTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
