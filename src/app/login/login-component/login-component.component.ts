import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {

  constructor(
    private router: Router, 
    private http: HttpClient,
    private cookieService: CookieService,
    ) { }

  async navigateToMenu() {
    const username = document.getElementById('user') as HTMLInputElement;
    const password = document.getElementById('pass') as HTMLInputElement;
    try {
      const credentials = {
        username: username.value,
        password: password.value,
      };

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      const body = new URLSearchParams(credentials).toString();
      console.log('Body:', body);
      const response = await this.http.post<any>('http://127.0.0.1:8000/token', body, { headers }).toPromise();

      console.log('Access Token:', response.access_token);

      // You can store the token in a secure way, like in a service or in local storage
      // Redirect to the menu page after successful login
      const groupInfo = await this.http.get<any>(`http://127.0.0.1:8000/search_obrero/${username.value}`).toPromise();
      const groupId = groupInfo.Obrero.id_grupo;
      this.cookieService.set('groupId', groupId.toString());

      this.router.navigate(['/menu']);
    } catch (error: any) {
      if (error instanceof HttpErrorResponse) {
        console.error('HTTP Error:', error.status, error.statusText);
      } else {
        console.error('Unexpected Error:', error);
      }
    }
  }
}
