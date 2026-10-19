import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WhatsappService {
  // REEMPLAZAR por el número real, con indicativo de Colombia y sin +, espacios ni guiones.
  private readonly phoneNumber = '573045819800';

  link(message = 'Hola, Darinel. Quisiera solicitar información sobre una consulta jurídica.'): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(message)}`;
  }

  serviceLink(service: string): string {
    return this.link(`Hola, Darinel. Quisiera consultar sobre el servicio de ${service}.`);
  }
}
