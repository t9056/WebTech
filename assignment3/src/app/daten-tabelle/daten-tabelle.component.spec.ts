import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenTabelleComponent } from './daten-tabelle.component';

describe('DatenTabelleComponent', () => {
  let component: DatenTabelleComponent;
  let fixture: ComponentFixture<DatenTabelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatenTabelleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatenTabelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
