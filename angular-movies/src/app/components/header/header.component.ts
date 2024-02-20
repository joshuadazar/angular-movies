import { Component } from '@angular/core';
import { CtaComponentComponent } from '../cta-component/cta-component.component';
import { NavComponentComponent } from '../nav-component/nav-component.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CtaComponentComponent, NavComponentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
