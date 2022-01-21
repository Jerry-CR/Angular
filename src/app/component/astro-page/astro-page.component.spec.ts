import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroPageComponent } from './astro-page.component';

describe('AstroPageComponent', () => {
  let component: AstroPageComponent;
  let fixture: ComponentFixture<AstroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
