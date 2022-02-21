import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxGridModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule } from 'igniteui-angular';
import { WahooComponent } from './wahoo.component';

describe('WahooComponent', () => {
  let component: WahooComponent;
  let fixture: ComponentFixture<WahooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WahooComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxGridModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxChipsModule, IgxInputGroupModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WahooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
