import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq-component.component.html',
  styleUrls: ['./faq-component.component.css']
})
export class FAQComponentComponent {
  faqs = [
    { question: 'Pregunta 1', answer: 'Respuesta 1', active: false },
    { question: 'Pregunta 2', answer: 'Respuesta 2', active: false },
    { question: 'Pregunta 3', answer: 'Respuesta 3', active: false },
    { question: '¿no se encuentra la respuesta?', answer: 'contactanos: correo@gmail.com', active: false }
  ];

  toggleFaq(faq: any) {
    faq.active = !faq.active;
  }
}
