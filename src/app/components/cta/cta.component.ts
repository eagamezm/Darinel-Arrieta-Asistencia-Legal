import { Component } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-cta',
  standalone: true,
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {
  constructor(private whatsapp: WhatsappService) {}
  get contactLink(): string { return this.whatsapp.link(); }
}
