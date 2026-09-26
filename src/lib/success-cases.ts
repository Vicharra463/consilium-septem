/* ============================================================
   CONSILIUM SEPTEM — Casos de Éxito
   ------------------------------------------------------------
   El contenido textual proviene de public/images/caso.txt y se
   reproduce SIN ALTERAR: solo se reflowan los cortes de línea
   del archivo original para su renderizado en HTML.
   ============================================================ */

export interface CaseSubsection {
  heading: string;
  body: string;
}

export interface CaseSection {
  heading: string;
  /** Párrafos de la sección, en orden. */
  paragraphs?: string[];
  /** Lista de puntos (sección 2). */
  bullets?: string[];
  /** Sub-apartados A/B/C (sección 3). */
  subsections?: CaseSubsection[];
}

export interface SuccessCase {
  id: string;
  /** Número tal como aparece en el original: "CASO DE ÉXITO 01". */
  label: string;
  slug: string;
  title: string;
  client: string;
  practiceArea: string;
  status: string;
  /** Extracto textual del propio documento para las tarjetas. */
  excerpt: string;
  sections: CaseSection[];
}

export const successCases: SuccessCase[] = [
  {
    id: "1",
    label: "CASO DE ÉXITO 01",
    slug: "defensa-de-la-innovacion-digital",
    title: "Defensa de la Innovación Digital frente a las Barreras Burocráticas.",
    client: "EcoDelivery S.A.C. (Startup de tecnología sostenible).",
    practiceArea: "Derecho Administrativo y Constitucional.",
    status: "Resuelto a favor del cliente.",
    excerpt:
      "En febrero de 2026, nuestro cliente, la startup EcoDelivery S.A.C. (una plataforma 100% digital sin oficinas de atención al público), fue multada con 5 UIT y sancionada con orden de clausura por un Ministerio supervisor.",
    sections: [
      {
        heading: "1. Resumen de los Hechos (El Problema)",
        paragraphs: [
          "En febrero de 2026, nuestro cliente, la startup EcoDelivery S.A.C. (una plataforma 100% digital sin oficinas de atención al público), fue multada con 5 UIT y sancionada con orden de clausura por un Ministerio supervisor. La sanción se fundamentó en el incumplimiento de un Decreto Supremo (Norma B) publicado en enero de 2026, el cual exigía a todas las empresas tecnológicas tramitar un Certificado de Operación Física costoso, basándose únicamente en la dirección de su domicilio fiscal.",
          "El cliente acudió a Consilium Septem argumentando que una norma del Congreso, la Ley de Fomento al Emprendimiento Digital (Norma A), publicada a fines del 2025, eximía explícitamente a las startups 100% digitales de tramitar permisos físicos.",
        ],
      },
      {
        heading: "2. El Conflicto Normativo (Antinomia)",
        paragraphs: [
          "Nos encontrábamos frente a un evidente conflicto legal (antinomia) entre dos normas vigentes que regulaban el mismo hecho de forma contradictoria",
        ],
        bullets: [
          "Norma A (La Ley) Exime de certificados físicos a plataformas digitales.",
          "Norma B (El Decreto Supremo) Obliga a tramitar el certificado físico utilizando el domicilio fiscal como excusa.",
        ],
      },
      {
        heading: "3. Estrategia Legal de Consilium Septem (Análisis de la Firma)",
        paragraphs: [
          "Para anular la multa y sentar jurisprudencia, nuestro equipo jurídico no se limitó a leer el texto literal, sino que aplicó tres niveles de análisis",
        ],
        subsections: [
          {
            heading: "A. Análisis del Íter Legislativo (Buscando la Ratio Legis)",
            body: "El Ministerio argumentaba que la Ley era ambigua respecto al domicilio fiscal. Para desvirtuar esto, nuestro equipo rastreó el íter legislativo de la Ley de Fomento en el Congreso de la República. Revisamos el Dictamen de la Comisión de Economía y el Diario de los Debates del Pleno. Demostramos que durante el debate parlamentario, los legisladores discutieron y rechazaron expresamente una indicación que buscaba gravar los domicilios fiscales. La intención original del legislador (ratio legis) era la desregulación total del espacio físico para las startups. Por tanto, el Ejecutivo distorsionó el espíritu de la ley al reglamentarla.",
          },
          {
            heading: "B. Análisis de los Tipos de Vigencia Normativa",
            body: "El Ministerio intentó justificar su sanción alegando que el Decreto Supremo era la norma más reciente. Nuestro equipo realizó un análisis de vigencia La Ley de Fomento se publicó el 15 de noviembre de 2025, entrando en vigencia al día siguiente (sin periodo de vacatio legis). El Decreto Supremo se publicó en enero de 2026. Si bien el Decreto era posterior cronológicamente, regulaba situaciones que ya estaban protegidas por una ley previa y plenamente vigente, vulnerando el principio de predictibilidad jurídica.",
          },
          {
            heading: "C. Aplicación de la Jerarquía Normativa",
            body: "Para resolver la antinomia de manera definitiva, aplicamos el principio de Jerarquía Normativa consagrado en el artículo 51 de la Constitución Política del Perú. Invocamos que la Norma A (Ley) posee rango legal, mientras que la Norma B (Decreto Supremo) posee rango infra legal (reglamentario). El Ejecutivo, al emitir el Decreto, incurrió en un exceso de su potestad reglamentaria, transgrediendo el Principio de Legalidad. Una norma de menor jerarquía jamás puede desnaturalizar, modificar ni restringir derechos otorgados por una norma de mayor jerarquía.",
          },
        ],
      },
      {
        heading: "4. Fallo y Resolución (El Resultado)",
        paragraphs: [
          "Con base en nuestros sólidos argumentos sobre jerarquía normativa y el análisis del íter legislativo, la autoridad resolutiva administrativa (y posteriormente el tribunal competente) declaró fundada la nulidad de la multa interpuesta a EcoDelivery S.A.C.. Se estableció que el Decreto Supremo era inaplicable al caso concreto por ser incompatible con una Ley de rango superior, sentando un precedente valioso para todo el ecosistema de emprendedores en el país",
        ],
      },
    ],
  },
];
