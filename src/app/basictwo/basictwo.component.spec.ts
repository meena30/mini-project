import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasictwoComponent } from './basictwo.component';

describe('BasictwoComponent', () => {
  let component: BasictwoComponent;
  let fixture: ComponentFixture<BasictwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasictwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasictwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
