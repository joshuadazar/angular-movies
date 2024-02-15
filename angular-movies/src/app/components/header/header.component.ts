import { Component } from '@angular/core';
import { CtaComoponentComponent } from '../cta-comoponent/cta-comoponent.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CtaComoponentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
