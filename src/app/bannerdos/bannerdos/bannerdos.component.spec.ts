import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerdosComponent } from './bannerdos.component';

describe('BannerdosComponent', () => {
  let component: BannerdosComponent;
  let fixture: ComponentFixture<BannerdosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerdosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerdosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
