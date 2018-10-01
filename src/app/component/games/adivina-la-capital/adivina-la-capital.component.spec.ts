import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivinaLaCapitalComponent } from './adivina-la-capital.component';

describe('AdivinaLaCapitalComponent', () => {
  let component: AdivinaLaCapitalComponent;
  let fixture: ComponentFixture<AdivinaLaCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdivinaLaCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivinaLaCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
