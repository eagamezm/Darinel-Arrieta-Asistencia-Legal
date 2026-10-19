export interface LegalService {
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export const LEGAL_SERVICES: LegalService[] = [
  {
    icon: 'bi-credit-card-2-front',
    title: 'Deudas y centrales de riesgo',
    description: 'Orientación para comprender obligaciones, reportes y alternativas legales.',
    details: [
      'Revisión de reportes negativos y solicitudes de rectificación.',
      'Estudio de prescripción de obligaciones, según el caso.',
      'Derechos de petición y reclamaciones frente a información financiera.'
    ]
  },
  {
    icon: 'bi-people',
    title: 'Familia y sucesiones',
    description: 'Acompañamiento jurídico en decisiones familiares y patrimoniales.',
    details: [
      'Orientación sobre divorcio y liquidación de sociedad conyugal.',
      'Revisión de requisitos para sucesiones y herencias.',
      'Preparación documental para trámites notariales o judiciales.'
    ]
  },
  {
    icon: 'bi-car-front',
    title: 'Tránsito y movilidad',
    description: 'Análisis de comparendos, multas y actuaciones administrativas.',
    details: [
      'Estudio de prescripción de comparendos y multas.',
      'Revisión de notificaciones y cobros coactivos.',
      'Derechos de petición, recursos y solicitudes procedentes.'
    ]
  },
  {
    icon: 'bi-hourglass-split',
    title: 'Pensiones y seguridad social',
    description: 'Orientación para entender tu historia laboral y tus opciones pensionales.',
    details: [
      'Revisión preliminar de semanas e historia laboral.',
      'Solicitudes de corrección de información.',
      'Orientación sobre reconocimiento pensional y respuestas administrativas.'
    ]
  },
  {
    icon: 'bi-file-earmark-text',
    title: 'Contratos y asuntos civiles',
    description: 'Prevención de conflictos mediante documentos claros y revisión oportuna.',
    details: [
      'Elaboración y revisión de contratos.',
      'Requerimientos por incumplimiento y análisis de cláusulas.',
      'Orientación sobre arrendamientos y relaciones comerciales.'
    ]
  },
  {
    icon: 'bi-building',
    title: 'Asesoría empresarial y administrativa',
    description: 'Apoyo jurídico preventivo para personas, emprendedores y organizaciones.',
    details: [
      'Derechos de petición, recursos y trámites administrativos.',
      'Revisión documental y conceptos jurídicos.',
      'Apoyo en cumplimiento normativo y gestión de riesgos legales.'
    ]
  }
];
