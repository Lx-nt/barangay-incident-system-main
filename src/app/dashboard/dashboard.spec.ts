import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard'; // Change 'Dashboard' to 'DashboardComponent'

describe('DashboardComponent', () => { // Also update the describe name
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent]
    })
    .compileComponents();import { HomePage } from './home';

describe('HomePage', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should create the home page class', () => {
    expect(page).toBeTruthy();
  });

  it('should have default stats', () => {
    expect(page.totalReports).toBe(120);
    expect(page.resolved).toBe(80);
    expect(page.ongoing).toBe(15);
    expect(page.pending).toBe(25);
  });
});


    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});