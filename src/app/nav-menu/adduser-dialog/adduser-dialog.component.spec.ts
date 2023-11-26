import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserDialogComponent } from './adduser-dialog.component';

describe('AdduserDialogComponent', () => {
  let component: AdduserDialogComponent;
  let fixture: ComponentFixture<AdduserDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdduserDialogComponent]
    });
    fixture = TestBed.createComponent(AdduserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
