import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlgorithmsService } from '../../services/algorithms.service';
import { validNumberNatural } from '../../helpers/validators.helpers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private algorithmSvc = inject(AlgorithmsService);
  number = new FormControl<number | null>(null, [
    Validators.required,
    validNumberNatural(),
  ]);

  //calculate the number using the signal
  calculate() {
    if (!this.number.value || this.number.value <= 0) return;
    this.algorithmSvc.number.set(this.number.value);
  }

  //simple errors 
  getErrorMessage() {
    if (this.number.hasError('required')) return 'Número es requerido.'
    if (this.number.hasError('invalidNumber')) return 'Debes ingresar un numero positivo)';
    return '';
  }
}
