import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-cta-comoponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-comoponent.component.html',
  styleUrl: './cta-comoponent.component.scss',

})
export class CtaComoponentComponent {

  likes: number = 0;
  estado: boolean = false;

  addLike() {
    console.log('Like added');
    this.estado = !this.estado;
    setTimeout(() => { this.estado = !this.estado; }, 200);
    this.likes++;
  }
}
