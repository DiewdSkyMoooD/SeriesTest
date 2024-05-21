import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';
import { AlgorithmsService } from '../../services/algorithms.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let service: AlgorithmsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormComponent],
    }).compileComponents();

    service = TestBed.inject(AlgorithmsService);
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid form', () => {
    const number = component.number;
    number.setValue(-4);
    expect(number.invalid).toBeTrue();
    number.setValue(null);
    expect(number.invalid).toBeTrue();
  });

  it('should return valid  form', () => {
    const number = component.number;
    number.setValue(4);
    expect(number.valid).toBeTrue();
  });

  it('verify if it is take by service signal', () => {
    const number = component.number;
    number.setValue(5);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    compiled.querySelector('button')?.click();
    expect(service.number()).toBe(5);
  });
});
