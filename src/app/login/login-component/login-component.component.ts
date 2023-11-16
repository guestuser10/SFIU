import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent{
  constructor(private router: Router) { }
  navigateToMenu() {
    this.router.navigate(['/menu']);
  }
}
