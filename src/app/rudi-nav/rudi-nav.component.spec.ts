import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RudiNavComponent } from './rudi-nav.component';

describe('RudiNavComponent', () => {
  let component: RudiNavComponent;
  let fixture: ComponentFixture<RudiNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RudiNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RudiNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
