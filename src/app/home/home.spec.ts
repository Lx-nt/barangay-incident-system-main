import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have monthlyStats defined', () => {
    expect(component.monthlyStats).toBeDefined();
    expect(component.monthlyStats.total).toBe(38);
  });

  it('should have incidentTypes defined', () => {
    expect(component.incidentTypes.length).toBeGreaterThan(0);
  });

  // ---- Tests for Charts ----
  it('should have a canvas for monthlyBarChart', () => {
    const barCanvas = fixture.debugElement.query(By.css('#monthlyBarChart'));
    expect(barCanvas).toBeTruthy();
  });

  it('should have a canvas for incidentPieChart', () => {
    const pieCanvas = fixture.debugElement.query(By.css('#incidentPieChart'));
    expect(pieCanvas).toBeTruthy();
  });

  it('should initialize charts without errors', () => {
    expect(() => component.ngOnInit()).not.toThrow();
  });
});
