import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTitleComponent } from './task-title.component';

describe('TaskTitleComponent', () => {
  let component: TaskTitleComponent;
  let fixture: ComponentFixture<TaskTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskTitleComponent]
    });
    fixture = TestBed.createComponent(TaskTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
