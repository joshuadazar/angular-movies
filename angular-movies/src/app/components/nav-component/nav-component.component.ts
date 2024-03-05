import { Component, } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-component',
  standalone: true,
  imports: [],
  templateUrl: './nav-component.component.html',
  styleUrl: './nav-component.component.scss'
})
export class NavComponentComponent {

  isUserAuthenticated: boolean = false;
  $sub: Subscription = new Subscription();

  constructor(
    public userService: UserService

  ) { }

  ngOnInit() {
    this.$sub = this.userService.getAuthenticationStatus().subscribe((status: boolean) => {
      this.isUserAuthenticated = status;
    });
  }

  ngOndestroy() {
    this.$sub.unsubscribe();
  }

}
