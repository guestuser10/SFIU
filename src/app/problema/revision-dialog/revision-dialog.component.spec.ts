import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionDialogComponent } from './revision-dialog.component';

describe('RevisionDialogComponent', () => {
  let component: RevisionDialogComponent;
  let fixture: ComponentFixture<RevisionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevisionDialogComponent]
    });
    fixture = TestBed.createComponent(RevisionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
