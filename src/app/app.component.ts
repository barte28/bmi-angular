import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BmiComponent } from "./bmi/bmi.component";
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BmiComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bmi';
}
