import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTestComponent } from './mod-test.component';

describe('ModTestComponent', () => {
  let component: ModTestComponent;
  let fixture: ComponentFixture<ModTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
