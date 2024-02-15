import { Component } from '@angular/core';
import { CtaComoponentComponent } from '../cta-comoponent/cta-comoponent.component';
import { NavComponentComponent } from '../nav-component/nav-component.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CtaComoponentComponent, NavComponentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
