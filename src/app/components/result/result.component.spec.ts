import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './result.component';
import { AlgorithmsService } from '../../services/algorithms.service';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let service: AlgorithmsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultComponent],
    }).compileComponents();
    
    service = TestBed.inject(AlgorithmsService);
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verify if result is correct render', () => {
    service.number.set(1);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain('5.143');
  });
});
