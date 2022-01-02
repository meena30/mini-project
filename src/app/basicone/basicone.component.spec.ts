import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasiconeComponent } from './basicone.component';

describe('BasiconeComponent', () => {
  let component: BasiconeComponent;
  let fixture: ComponentFixture<BasiconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasiconeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasiconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
