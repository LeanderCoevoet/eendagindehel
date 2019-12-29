/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { countdownCustomComponent } from "./countdownCustom.component";

describe('CountdownComponent', () => {
  let component: countdownCustomComponent;
  let fixture: ComponentFixture<countdownCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ countdownCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(countdownCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
