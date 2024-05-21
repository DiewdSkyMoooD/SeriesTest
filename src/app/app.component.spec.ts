import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FormComponent, ResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should contain two child components', () => {
    const formComponent = fixture.debugElement.query(
      By.directive(FormComponent)
    );
    const resultComponent = fixture.debugElement.query(
      By.directive(ResultComponent)
    );
    expect(formComponent).toBeTruthy();
    expect(resultComponent).toBeTruthy();
  });
});
