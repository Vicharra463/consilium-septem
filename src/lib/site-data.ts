/* ============================================================
   CONSILIUM SEPTEM — Site Configuration
   ============================================================ */

export const siteConfig = {
  name: "Consilium Septem",
  tagline: "Consejo de Expertos Legales",
  description:
    "Consilium Septem es un bufete de abogados conformado por un consejo de 7 expertos en diversas ramas del derecho, comprometidos con la excelencia y la defensa integral de nuestros clientes.",
  url: "https://consiliumseptem.com",
  founder: "Constituido por siete profesionales distinguidos",
} as const;

/* ============================================================
   NAVIGATION
   ============================================================ */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Derecho Civil", href: "/servicios#civil" },
      { label: "Derecho Penal", href: "/servicios#penal" },
      { label: "Derecho Constitucional", href: "/servicios#constitucional" },
      { label: "Derecho Laboral", href: "/servicios#laboral" },
      { label: "Derecho Tributario", href: "/servicios#tributario" },
    ],
  },
  { label: "Equipo", href: "/equipo" },
  { label: "Contacto", href: "#contacto" },
];

/* ============================================================
   SERVICES
   ============================================================ */

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    id: "civil",
    title: "Derecho Civil",
    slug: "civil",
    icon: "⚖️",
    shortDescription:
      "Asesoría integral en contratos, obligaciones, derecho de familia, sucesiones y responsabilidad civil.",
    description:
      "Nuestro equipo de derecho civil brinda asesoramiento completo en todas las ramas del derecho privado. Desde la redacción y negociación de contratos complejos hasta la resolución de conflictos familiares y sucesorios, actuamos con la rigurosidad y sensibilidad que cada caso requiere. Representamos a personas físicas y jurídicas en litigios civiles, arbitrajes y mediaciones, priorizando siempre soluciones estratégicas que protejan los intereses de nuestros clientes.",
    highlights: [
      "Contratos civiles y mercantiles",
      "Derecho de familia y sucesiones",
      "Responsabilidad civil y daños",
      "Mediación y resolución de conflictos",
      "Propiedad intelectual",
    ],
  },
  {
    id: "penal",
    title: "Derecho Penal",
    slug: "penal",
    icon: "🔒",
    shortDescription:
      "Defensa penal estratégica en todas las etapas del proceso, desde la investigación hasta el juicio oral.",
    description:
      "La defensa penal requiere experiencia, preparación y un conocimiento profundo del sistema de justicia penal. Nuestro equipo cuenta con una amplia trayectoria en la defensa de clientes en procesos penales de alta complejidad, incluyendo delitos económicos, cibernéticos, contra la propiedad y contra la vida. Proporcionamos una defensa técnica rigurosa, acompañada de un trato humano y confidencial en cada etapa del procedimiento.",
    highlights: [
      "Defensa en procesos penales",
      "Delitos económicos y corporativos",
      "Derecho penal internacional",
      "Acción de tutela y habeas corpus",
      "Medidas cautelares y sustitutivas",
    ],
  },
  {
    id: "constitucional",
    title: "Derecho Constitucional",
    slug: "constitucional",
    icon: "📜",
    shortDescription:
      "Protección de derechos fundamentales a través de acciones constitucionales y control de constitucionalidad.",
    description:
      "El derecho constitucional es la base de todo el ordenamiento jurídico. Nuestros especialistas en esta materia tienen una destacada trayectoria en la interposición y seguimiento de acciones de tutela, habeas corpus, habeas data y acciones de inconstitucionalidad. Asistimos a personas, empresas y organizaciones en la protección efectiva de sus derechos fundamentales, participando activamente en el desarrollo de la jurisprudencia constitucional.",
    highlights: [
      "Acciones de tutela y habeas corpus",
      "Habeas data y acción popular",
      "Control de constitucionalidad",
      "Derechos fundamentales y DDHH",
      "Contencioso administrativo constitucional",
    ],
  },
  {
    id: "laboral",
    title: "Derecho Laboral",
    slug: "laboral",
    icon: "👷",
    shortDescription:
      "Asesoría laboral preventiva y contenciosa para empleadores y trabajadores.",
    description:
      "El derecho laboral requiere un equilibrio entre la protección de los derechos de los trabajadores y las necesidades operativas de las empresas. Asesoramos a ambos sectores en la correcta estructuración de relaciones laborales, contratos, convenios colectivos y políticas de recursos humanos. En el ámbito contencioso, representamos a nuestros clientes en demandas laborales, conciliaciones, arbitrajes y procedimientos ante la inspección de trabajo.",
    highlights: [
      "Contratos y convenios colectivos",
      "Seguridad social y jubilaciones",
      "Despido, liquidación e indemnizaciones",
      "Seguridad e higiene laboral",
      "Conflictos sindicales",
    ],
  },
  {
    id: "tributario",
    title: "Derecho Tributario",
    slug: "tributario",
    icon: "📊",
    shortDescription:
      "Planificación fiscal, defensa en auditorías y litigios tributarios ante organismos estatales.",
    description:
      "El derecho tributario es una de las áreas más dinámicas y desafiantes del ordenamiento jurídico. Nuestro equipo de especialistas asesora a personas y empresas en la optimización de su carga fiscal dentro del marco legal, así como en la defensa frente a actuaciones de la administración tributaria. Contamos con amplia experiencia en revisiones fiscales, recursos administrativos y litigios tributarios ante los tribunales competentes.",
    highlights: [
      "Planificación y optimización fiscal",
      "Defensa en auditorías tributarias",
      "Recursos administrativos y contencioso",
      "Impuestos internacionales",
      "Fiscalidad de sociedades y operaciones M&A",
    ],
  },
];

/* ============================================================
   TEAM MEMBERS
   ============================================================ */

export interface TeamMember {
  id: string;
  name: string;
  slug: string;
  role: string;
  specialty: string;
  image: string;
  shortBio: string;
  fullBio: string;
  education: string[];
  email: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Carlos Mendoza",
    slug: "dr-carlos-mendoza",
    role: "Socio Fundador",
    specialty: "Derecho Civil y Contractual",
    image: "/images/equipe/carlos-mendoza.jpg",
    shortBio:
      "Fundador de Consilium Septem con más de 25 años de trayectoria en derecho civil y contractual.",
    fullBio:
      "El Dr. Carlos Mendoza es el fundador y socio director de Consilium Septem. Con más de 25 años de experiencia en el ejercicio del derecho civil y contractual, ha liderado algunos de los casos más emblemáticos de la jurisprudencia nacional. Graduado con honors de la Facultad de Derecho de la Universidad Nacional, complementó su formación con estudios de posgrado en Derecho Contractual en la Universidad de Cambridge. Su visión estratégica y compromiso con la excelencia han posicionado a Consilium Septem como una de las firmas de abogados más prestigiosas del país.",
    education: [
      "Doctor en Derecho - Universidad Nacional",
      "LL.M. Derecho Contractual - University of Cambridge",
      "Mediador Certificado - Centro de Mediación Internacional",
    ],
    email: "c.mendoza@consiliumseptem.com",
  },
  {
    id: "2",
    name: "Dra. Ana Villareal",
    slug: "dr-ana-villareal",
    role: "Socia Directora",
    specialty: "Derecho Penal y Criminalístico",
    image: "/images/equipe/ana-villareal.jpg",
    shortBio:
      "Especialista en derecho penal con reconocida trayectoria en defensa de casos de alta complejidad.",
    fullBio:
      "La Dra. Ana Villareal es socia directora y jefa del departamento de derecho penal de Consilium Septem. Con una trayectoria de más de 20 años en la defensa penal, ha representado exitosamente a clientes en casos de gran repercusión mediática. Es reconocida por su rigor técnico, su capacidad de análisis y su habilidad para construir estrategias de defensa sólidas. Posee un doctorado en Ciencias Penales y es profesora invitada en múltiples instituciones académicas.",
    education: [
      "Doctora en Ciencias Penales - Universidad Complutense",
      "Especialización en Criminalística - Instituto Nacional de Criminalística",
      "Certificación en Derecho Penal Internacional - La Haya",
    ],
    email: "a.villareal@consiliumseptem.com",
  },
  {
    id: "3",
    name: "Dr. Ricardo Torres",
    slug: "dr-ricardo-torres",
    role: "Socio",
    specialty: "Derecho Constitucional",
    image: "/images/equipe/ricardo-torres.jpg",
    shortBio:
      "Experto en derecho constitucional con amplia experiencia en acciones de tutela y derechos fundamentales.",
    fullBio:
      "El Dr. Ricardo Torres es socio del departamento de derecho constitucional de Consilium Septem. Con más de 18 años de experiencia, ha participado en la tramitación de miles de acciones de tutela, habeas corpus y acciones de inconstitucionalidad. Su trabajo ha sido determinante en la protección de derechos fundamentales de personas vulnerables y ha contribuido al desarrollo de la jurisprudencia constitucional del país. Es autor de numerous publicaciones académicas sobre derechos fundamentales.",
    education: [
      "Doctor en Derecho Constitucional - Universidad de Buenos Aires",
      "LL.M. Derechos Humanos - Universidad de Oxford",
      "Profesor de Derecho Constitucional - Facultad de Derecho",
    ],
    email: "r.torres@consiliumseptem.com",
  },
  {
    id: "4",
    name: "Dra. María Estrada",
    slug: "dr-maria-estrada",
    role: "Socia",
    specialty: "Derecho Laboral",
    image: "/images/equipe/maria-estrada.jpg",
    shortBio:
      "Referente en derecho laboral, asesorando tanto a grandes empresas como a trabajadores y sindicatos.",
    fullBio:
      "La Dra. María Estrada es socia y directora del departamento de derecho laboral de Consilium Septem. Con 15 años de experiencia, ha desarrollado una visión integral del derecho del trabajo que le permite asesorar eficazmente tanto a empleadores como a trabajadores. Ha liderado la negociación de importantes convenios colectivos y ha representado a clientes en los conflictos laborales más relevantes de la última década. Es autora de artículos especializados y conferencista frecuente sobre legislación laboral.",
    education: [
      "Doctora en Derecho del Trabajo - Universidad de Chile",
      "Especialización en Negociación Colectiva - ILO Ginebra",
      "Máster en Relaciones Laborales - IE Business School",
    ],
    email: "m.estrada@consiliumseptem.com",
  },
  {
    id: "5",
    name: "Dr. Javier Contreras",
    slug: "dr-javier-contreras",
    role: "Socio",
    specialty: "Derecho Tributario",
    image: "/images/equipe/javier-contreras.jpg",
    shortBio:
      "Especialista en derecho tributario con amplia experiencia en planificación fiscal y litigios ante la administración.",
    fullBio:
      "El Dr. Javier Contreras es socio del departamento de derecho tributario de Consilium Septem. Con más de 16 años de experiencia, ha asesorado a empresas nacionales e internacionales en la optimización de su estructura fiscal y en la defensa frente a procedimientos de auditoría. Su profundo conocimiento del régimen tributario y su capacidad para anticipar cambios legislativos lo convierten en un asesor estratégico invaluable para los clientes de la firma.",
    education: [
      "Doctor en Derecho Tributario - Universidad del Rosario",
      "Especialización en Fiscalidad Internacional - ESADE",
      "Certificación en Transfer Pricing - OCDE",
    ],
    email: "j.contreras@consiliumseptem.com",
  },
  {
    id: "6",
    name: "Dra. Lucía Herrera",
    slug: "dr-lucia-herrera",
    role: "Socia Asociada",
    specialty: "Derecho Civil y Familia",
    image: "/images/equipe/lucia-herrera.jpg",
    shortBio:
      "Especialista en derecho de familia y sucesiones, con enfoque en mediación y resolución pacífica de conflictos.",
    fullBio:
      "La Dra. Lucía Herrera es socia asociada del departamento de derecho civil de Consilium Septem. Con 12 años de experiencia, se ha especializado en derecho de familia y sucesiones, destacándose por su enfoque humanizado y su capacidad para encontrar soluciones que preserven las relaciones familiares. Es certificada en mediación familiar y ha resuelto exitosamente cientos de conflictos sucesorios y familiares, priorizando siempre el bienestar de las partes involucradas.",
    education: [
      "Doctora en Derecho Civil - Universidad Javeriana",
      "Especialización en Derecho de Familia - Universidad de Barcelona",
      "Certificación en Mediación Familiar - Centro de Mediación",
    ],
    email: "l.herrera@consiliumseptem.com",
  },
  {
    id: "7",
    name: "Dr. Diego Salazar",
    slug: "dr-diego-salazar",
    role: "Socio Asociado",
    specialty: "Derecho Laboral y Seguridad Social",
    image: "/images/equipe/diego-salazar.jpg",
    shortBio:
      "Experto en seguridad social y derecho laboral preventivo, asesorando a empresas en compliance laboral.",
    fullBio:
      "El Dr. Diego Salazar es socio asociado del departamento de derecho laboral de Consilium Septem. Con 10 años de experiencia, se ha especializado en el asesoramiento preventivo a empresas en materia de compliance laboral, seguridad social y políticas de recursos humanos. Su enfoque proactivo ha ayudado a numerosas organizaciones a evitar conflictos laborales y a optimizar sus procesos de gestión del talento humano. Es conferencista frecuente sobre legislación laboral y seguridad social.",
    education: [
      "Doctor en Derecho Laboral - Universidad de los Andes",
      "Especialización en Compliance Laboral - IESE Business School",
      "Certificación en Seguridad Social - Universidad de Sevilla",
    ],
    email: "d.salazar@consiliumseptem.com",
  },
];
