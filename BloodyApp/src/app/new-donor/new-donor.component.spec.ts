import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDonorComponent } from './new-donor.component';

describe('NewDonorComponent', () => {
  let component: NewDonorComponent;
  let fixture: ComponentFixture<NewDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
