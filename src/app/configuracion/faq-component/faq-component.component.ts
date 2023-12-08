import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environments/environment';

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq-component.component.html',
  styleUrls: ['./faq-component.component.css']
})
export class FAQComponentComponent implements OnInit {
  faqs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchFAQs();
  }

  fetchFAQs() {
    this.http.get<any>(`${env.apiUrl}/faq`).subscribe(data => {
      this.faqs = data.faq;
    });
  }

  toggleFaq(faq: any) {
    faq.active = !faq.active;
  }
}
