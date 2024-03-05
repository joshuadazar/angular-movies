import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private authenticationStatus = new EventEmitter<boolean>();

  getAuthenticationStatus() {
    return this.authenticationStatus
  }

  setAuthenticationStatus(status: boolean) {
    this.authenticationStatus.emit(status);
  }

}
