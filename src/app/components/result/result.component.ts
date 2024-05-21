import { Component, inject } from '@angular/core';
import { AlgorithmsService } from '../../services/algorithms.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css',
})
export class ResultComponent {
  public algorithmSvc = inject(AlgorithmsService);
  constructor() {}
}
