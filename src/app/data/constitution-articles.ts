export interface ConstitutionArticle {
  number: number;
  theme: string;
  excerpt: string;
  explanation: string;
}

// Extractos breves para divulgación. Verifica siempre el texto oficial vigente.
export const CONSTITUTION_ARTICLES: ConstitutionArticle[] = [
  {
    number: 1, theme: 'Principios fundamentales',
    excerpt: 'Colombia es un Estado social de derecho [...] fundada en el respeto de la dignidad humana, en el trabajo y la solidaridad [...] y en la prevalencia del interés general.',
    explanation: 'Este principio orienta la organización del Estado y la protección de la dignidad humana.'
  },
  {
    number: 13, theme: 'Igualdad',
    excerpt: 'Todas las personas nacen libres e iguales ante la ley, recibirán la misma protección y trato de las autoridades y gozarán de los mismos derechos, libertades y oportunidades sin ninguna discriminación.',
    explanation: 'La igualdad ante la ley es un criterio clave al evaluar decisiones y actuaciones de autoridades.'
  },
  {
    number: 15, theme: 'Intimidad y buen nombre',
    excerpt: 'Todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar.',
    explanation: 'Este artículo también contempla conocer, actualizar y rectificar información recogida en bancos de datos y archivos.'
  },
  {
    number: 23, theme: 'Derecho de petición',
    excerpt: 'Toda persona tiene derecho a presentar peticiones respetuosas a las autoridades por motivos de interés general o particular y a obtener pronta resolución.',
    explanation: 'Es una herramienta para solicitar información, presentar solicitudes y obtener respuesta dentro de los términos aplicables.'
  },
  {
    number: 29, theme: 'Debido proceso',
    excerpt: 'El debido proceso se aplicará a toda clase de actuaciones judiciales y administrativas.',
    explanation: 'Las actuaciones deben respetar las garantías y procedimientos previstos por el ordenamiento jurídico.'
  },
  {
    number: 83, theme: 'Buena fe',
    excerpt: 'Las actuaciones de los particulares y de las autoridades públicas deberán ceñirse a los postulados de la buena fe, la cual se presumirá en todas las gestiones que aquellos adelanten ante éstas.',
    explanation: 'La buena fe orienta las relaciones entre las personas y las autoridades públicas.'
  },
  {
    number: 86, theme: 'Acción de tutela',
    excerpt: 'Toda persona tendrá acción de tutela para reclamar ante los jueces [...] la protección inmediata de sus derechos constitucionales fundamentales, cuando quiera que éstos resulten vulnerados o amenazados.',
    explanation: 'La tutela protege derechos fundamentales, sujeto a los requisitos de procedencia.'
  },
  {
    number: 209, theme: 'Función administrativa',
    excerpt: 'La función administrativa está al servicio de los intereses generales y se desarrolla con fundamento en los principios de igualdad, moralidad, eficacia, economía, celeridad, imparcialidad y publicidad.',
    explanation: 'Estos principios orientan la actuación de la administración pública.'
  }
];
