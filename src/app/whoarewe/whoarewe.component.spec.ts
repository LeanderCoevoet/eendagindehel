/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhoareweComponent } from './whoarewe.component';

describe('WhoareweComponent', () => {
  let component: WhoareweComponent;
  let fixture: ComponentFixture<WhoareweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoareweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoareweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
