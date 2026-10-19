import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LEGAL_SERVICES, LegalService } from '../../data/legal-services';
import { WhatsappService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly services: LegalService[] = LEGAL_SERVICES;
  constructor(private whatsapp: WhatsappService) {}
  serviceLink(title: string): string { return this.whatsapp.serviceLink(title); }
}
