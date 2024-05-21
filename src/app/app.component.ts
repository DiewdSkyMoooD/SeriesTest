import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-series';
}
