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
  /** Única fuente de verdad de la sede — la consumen Footer y /contacto. */
  office: {
    street: "Av. Sánchez Cerro 1245, Piso 4",
    city: "Piura, Tierra de Cholos, Perú",
    phone: "+51 (01) 765-4321",
    phoneHref: "tel:+51017654321",
    email: "contacto@consiliumseptem.com",
    /**
     * Embed de Google Maps (formato `output=embed`, sin API key).
     * Cambiá `q=` para mover el pin; `z=` controla el zoom.
     */
    mapEmbedUrl: "https://www.google.com/maps?q=Piura%2C%20Per%C3%BA&z=13&output=embed",
  },
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
  { label: "Casos de Éxito", href: "/casos-de-exito" },
  { label: "Contacto", href: "/contacto" },
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
   TEAM MEMBERS — única fuente de verdad.
   Home (TeamPreview), /equipo y /equipo/[slug] consumen ESTA lista.
   Formación: todos los integrantes egresados de la Universidad César Vallejo.
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
    name: "Dra. Zuleyka Gómez Córdova",
    slug: "dra-zuleyka-gomez-cordova",
    role: "Socia Fundadora",
    specialty: "Derecho Laboral y Seguridad Social",
    image: "/images/zuleyka-gomez-cordova.jpg",
    shortBio:
      "Fundadora de Consilium Septem y experta en seguridad social y compliance laboral preventivo.",
    fullBio:
      "La Dra. Zuleyka Gómez Córdova es fundadora y socia directora de Consilium Septem. Desde la constitución de la firma apostó por un modelo de trabajo preventivo: revisar contratos y políticas internas antes de que nazca el conflicto, en lugar de tener que litigarlo después. Con más de 10 años de ejercicio profesional se ha especializado en seguridad social, régimen de salud y pensiones, así como en la adecuación normativa de los procesos de gestión del talento humano. Su enfoque proactivo ha permitido a varias organizaciones reducir contingencias laborales y ordenar sus procesos internos. Es conferencista frecuente sobre actualizaciones legislativas en materia laboral y seguridad social.",
    education: [
      "Doctora en Derecho — Universidad César Vallejo",
      "Maestría en Derecho Laboral y Seguridad Social — Universidad César Vallejo",
      "Diplomado en Compliance Laboral — Universidad César Vallejo",
    ],
    email: "z.gomez@consiliumseptem.com",
  },
  {
    id: "2",
    name: "Dr. Joseph Arturo Román Melgar",
    slug: "dr-joseph-roman-melgar",
    role: "Socio Director",
    specialty: "Derecho Penal y Criminalístico",
    image: "/images/joseph-roman-melgar.jpg",
    shortBio:
      "Especialista en defensa penal con amplia experiencia en casos de alta complejidad.",
    fullBio:
      "El Dr. Joseph Arturo Román Melgar es socio director del departamento de derecho penal de Consilium Septem. Cuenta con más de 20 años de trayectoria en la defensa de clientes dentro de procesos penales de distinta índole, incluyendo delitos económicos, contra la propiedad y delitos en el ámbito corporativo. Se desempeñó como abogado litigante en uno de los estudios penalistas más exigentes de Lima antes de incorporarse a la firma. Es reconocido por su preparación meticulosa de la estrategia probatoria, su dominio de la audiencia oral y por un trato cercano y estrictamente confidencial con cada cliente durante todo el procedimiento.",
    education: [
      "Doctor en Derecho — Universidad César Vallejo",
      "Maestría en Derecho Penal — Universidad César Vallejo",
      "Diplomado en Criminología y Criminalística — Universidad César Vallejo",
    ],
    email: "j.roman@consiliumseptem.com",
  },
  {
    id: "3",
    name: "Dra. Daniela Mercedes García Anastacio",
    slug: "dra-daniela-garcia-anastacio",
    role: "Socia",
    specialty: "Derecho Constitucional",
    image: "/images/daniela-garcia-anastacio.jpg",
    shortBio:
      "Experta en derecho constitucional y protección de derechos fundamentales.",
    fullBio:
      "La Dra. Daniela Mercedes García Anastacio es socia del departamento de derecho constitucional de Consilium Septem. A lo largo de 18 años de ejercicio, ha intervenido en la interposición y seguimiento de acciones de amparo, habeas corpus y habeas data, así como en procesos de control de constitucionalidad. Su trabajo se ha centrado en la protección efectiva de derechos fundamentales de personas vulnerables y de organizaciones de la sociedad civil. Ha participado en programas de fortalecimiento institucional y es autora de artículos sobre la evolución de la jurisprudencia constitucional.",
    education: [
      "Doctora en Derecho — Universidad César Vallejo",
      "Maestría en Derecho Constitucional — Universidad César Vallejo",
      "Diplomado en Derechos Humanos — Universidad César Vallejo",
    ],
    email: "d.garcia@consiliumseptem.com",
  },
  {
    id: "4",
    name: "Dra. María Fernanda Requena Mondragón",
    slug: "dra-maria-fernanda-requena-mondragon",
    role: "Socia",
    specialty: "Derecho Laboral",
    image: "/images/maria-fernanda-requena-mondragon.jpg",
    shortBio:
      "Referente en derecho laboral: asesora a empresas, trabajadores y organizaciones sindicales.",
    fullBio:
      "La Dra. María Fernanda Requena Mondragón es socia y directora del departamento de derecho laboral de Consilium Septem. Con 16 años de experiencia, ha asesorado a empresas nacionales y multinacionales en la estructuración de relaciones laborales, políticas de recursos humanos y negociación de convenios colectivos. En el ámbito contencioso ha representado a clientes en demandas por despido arbitrario, beneficios sociales y accidentes de trabajo. Combina un enfoque preventivo —orientado a reducir contingencias antes de que nazca el conflicto— con una sólida experiencia litigante ante los poderes jurisdiccionales.",
    education: [
      "Doctora en Derecho — Universidad César Vallejo",
      "Maestría en Derecho del Trabajo y Seguridad Social — Universidad César Vallejo",
      "Diplomado en Negociación Colectiva — Universidad César Vallejo",
    ],
    email: "m.requena@consiliumseptem.com",
  },
  {
    id: "5",
    name: "Dra. Priscila Alejandra Huamán Román",
    slug: "dra-priscila-huaman-roman",
    role: "Socia",
    specialty: "Derecho Tributario",
    image: "/images/priscila-huaman-roman.jpg",
    shortBio:
      "Especialista en planificación fiscal y defensa ante la administración tributaria.",
    fullBio:
      "La Dra. Priscila Alejandra Huamán Román es socia del departamento de derecho tributario de Consilium Septem. Con 14 años de experiencia, ha acompañado a empresas del retail, minería y servicios en la optimización de su estructura fiscal dentro estrictamente del marco legal, así como en la defensa frente a fiscalizaciones y resoluciones de primera y segunda instancia. Domina el procedimiento contencioso tributario y acompaña al cliente desde la etapa administrativa hasta el proceso judicial. Es conferencista habitual sobre reformas tributarias y su impacto en la operatoria de las empresas.",
    education: [
      "Doctora en Derecho — Universidad César Vallejo",
      "Maestría en Tributación — Universidad César Vallejo",
      "Diplomado en Fiscalidad Internacional — Universidad César Vallejo",
    ],
    email: "p.huaman@consiliumseptem.com",
  },
  {
    id: "6",
    name: "Dra. Yadhira Elizabeth Chávez Ipanaque",
    slug: "dra-yadhira-chavez-ipanaque",
    role: "Socia Asociada",
    specialty: "Derecho Civil y Familia",
    image: "/images/yadhira-chavez-ipanaque.jpg",
    shortBio:
      "Especialista en derecho de familia y sucesiones, con enfoque en mediación y resolución pacífica de conflictos.",
    fullBio:
      "La Dra. Yadhira Elizabeth Chávez Ipanaque es socia asociada del departamento de derecho civil de Consilium Septem. Con 12 años de experiencia se ha especializado en derecho de familia, régimen de visitas, alimentos y procesos sucesorios, así como en la división y partición de bienes. Destaca por su enfoque humanizado y por su capacidad de construir acuerdos que preservan las relaciones familiares cuando ello es posible. Está certificada en mediación familiar y ha conducido exitosamente cientos de audiencias de conciliación, priorizando siempre el interés superior de las partes involucradas.",
    education: [
      "Doctora en Derecho — Universidad César Vallejo",
      "Maestría en Derecho de Familia — Universidad César Vallejo",
      "Certificación en Mediación Familiar — Universidad César Vallejo",
    ],
    email: "y.chavez@consiliumseptem.com",
  },
  {
    id: "7",
    name: "Dra. Yaselinne Cruz Farceque",
    slug: "dra-yaselinne-cruz-farceque",
    role: "Socia Asociada",
    specialty: "Derecho Civil y Contractual",
    image: "/images/yaselinne-cruz-farceque.jpg",
    shortBio:
      "Especialista en derecho civil y contractual con más de 25 años de trayectoria.",
    fullBio:
      "La Dra. Yaselinne Cruz Farceque es socia asociada del departamento de derecho civil de Consilium Septem. Con más de 25 años de ejercicio profesional, ha liderado la resolución de controversias contractuales de alta complejidad y ha asesorado a empresas familiares e inversionistas en la estructuración de sus operaciones. Graduada con honores de la Universidad César Vallejo, complementó su formación con estudios de posgrado en la misma casa de estudios. En la firma atiende los asuntos civiles de mayor calado técnico, donde su experiencia en el análisis de contratos y en la construcción de la estrategia probatoria resulta determinante.",
    education: [
      "Doctora en Derecho — Universidad César Vallejo",
      "Maestría en Derecho Contractual y Mercantil — Universidad César Vallejo",
      "Certificación en Mediación y Arbitraje — Universidad César Vallejo",
    ],
    email: "y.cruz@consiliumseptem.com",
  },
];
