import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SummaryReports } from './summary-reports';

describe('SummaryReports', () => {
  let component: SummaryReports;
  let fixture: ComponentFixture<SummaryReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryReports ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
