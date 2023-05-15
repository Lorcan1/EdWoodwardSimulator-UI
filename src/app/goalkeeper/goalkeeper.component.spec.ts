import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalkeeperComponent } from './goalkeeper.component';

describe('GoalkeeperComponent', () => {
  let component: GoalkeeperComponent;
  let fixture: ComponentFixture<GoalkeeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalkeeperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalkeeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
