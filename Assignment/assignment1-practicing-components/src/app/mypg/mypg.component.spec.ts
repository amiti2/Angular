import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypgComponent } from './mypg.component';

describe('MypgComponent', () => {
  let component: MypgComponent;
  let fixture: ComponentFixture<MypgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
