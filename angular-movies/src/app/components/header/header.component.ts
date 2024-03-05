import { Component } from '@angular/core';
import { CtaComponentComponent } from '../cta-component/cta-component.component';
import { NavComponentComponent } from '../nav-component/nav-component.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CtaComponentComponent, NavComponentComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  userStatus: boolean = false;
  constructor(
    private userService: UserService
  ) { }

  setAuthenticationStatus() {
    this.userStatus = !this.userStatus;
    console.log('User status: ', this.userStatus);
    this.userService.getAuthenticationStatus().emit(this.userStatus);
  }

}
