import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bmi.component.html',
  styleUrl: './bmi.component.css'
})
export class BmiComponent {
  waga = 0;
  wzrost = 0;
  bmi = 0;

  oblicz(){
    this.bmi = (Math.round(this.waga/(this.wzrost * this.wzrost) *100))/100
  }
}
