import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpLogListComponent } from './op-log-list.component';

describe('OpLogListComponent', () => {
  let component: OpLogListComponent;
  let fixture: ComponentFixture<OpLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
