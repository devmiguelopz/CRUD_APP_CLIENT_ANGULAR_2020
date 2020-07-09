import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWindowFormComponent } from './clientWindowForm.component';

describe('ClientWindowFormComponent', () => {
  let component: ClientWindowFormComponent;
  let fixture: ComponentFixture<ClientWindowFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientWindowFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWindowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
