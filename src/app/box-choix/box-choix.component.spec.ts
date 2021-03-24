import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxChoixComponent } from './box-choix.component';

describe('BoxChoixComponent', () => {
  let component: BoxChoixComponent;
  let fixture: ComponentFixture<BoxChoixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxChoixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
