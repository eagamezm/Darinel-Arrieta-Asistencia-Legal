import { Component } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private whatsapp: WhatsappService) {}
  get contactLink(): string {
    return this.whatsapp.link('Hola, Darinel. Quiero conocer más sobre tu servicio de consulta preventiva.');
  }
}
