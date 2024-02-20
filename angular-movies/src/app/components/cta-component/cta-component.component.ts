import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-cta-comoponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-component.component.html',
  styleUrl: './cta-component.component.scss',

})
export class CtaComponentComponent {

  likes: number = 0;
  estado: boolean = false;

  addLike() {
    console.log('Like added');
    this.estado = !this.estado;
    setTimeout(() => { this.estado = !this.estado; }, 200);
    this.likes++;
  }
}
