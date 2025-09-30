import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
    plec = ""
    bialko = true
    nabial = true
    warzywa= true
    wiek = ""

    pokazparagraf = false

    pokaz(){
      
      if(this.pokazparagraf == true){
        this.pokazparagraf = false
      }
      else{
        this.pokazparagraf = true
      }
    }
}
