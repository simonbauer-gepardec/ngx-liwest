import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiwestHeaderComponent } from './liwest-header.component';

describe('LiwestHeaderComponent', () => {
  let component: LiwestHeaderComponent;
  let fixture: ComponentFixture<LiwestHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LiwestHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiwestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
