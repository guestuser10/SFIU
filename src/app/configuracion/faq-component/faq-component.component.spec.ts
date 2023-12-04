import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQComponentComponent } from './faq-component.component';

describe('FAQComponentComponent', () => {
  let component: FAQComponentComponent;
  let fixture: ComponentFixture<FAQComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FAQComponentComponent]
    });
    fixture = TestBed.createComponent(FAQComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
