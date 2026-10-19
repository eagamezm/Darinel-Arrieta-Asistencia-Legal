import { Component } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  templateUrl: './whatsapp-float.component.html',
  styleUrl: './whatsapp-float.component.scss'
})
export class WhatsAppFloatComponent {
  constructor(private whatsapp: WhatsappService) {}
  get contactLink(): string { return this.whatsapp.link(); }
}
