export default {
  global: {
    componenteFormativo: 'Derechos fundamentales del trabajo',
    descripcionCurso:
      'En los distintos procesos del desarrollo de la humanidad, el trabajo ha ejercido un papel determinante, como factor clave en la construcción de las relaciones sociales, de habilidades individuales y colectivas, de la promoción de la dignidad humana.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Trabajo, sociedad y dignidad humana',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La democracia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Derechos humanos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Constitución política de Colombia',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'El trabajo como derecho humano fundamental',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Los derechos del trabajo y en el trabajo',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ciudadanía laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Función social del trabajo',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Derechos relacionados con el trabajo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Concepto de trabajo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Convenio colectivo',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Libertad sindical',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'La negociación colectivas',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Organizaciones sindicales',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mecanismos de materialización de los derechos fundamentales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'La acción de tutela',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El derecho de petición',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Acción de cumplimiento',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Acciones populares y de grupo',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Mecanismos legales de protección de derechos laborales',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Desarrollo para una vida digna',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      //{
      //  nombreRuta: 'complementario',
      //  icono: 'far fa-folder-open',
      //  titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Antunes, R. (2005). Adiós al Trabajo? Ediciones Pensamiento Crítico. Bogotá. Cárdenas Robinson, 2017. Flexibilización laboral y justicia distributiva.',
      link: '',
    },
    {
      referencia:
        'Ávila, H. & Criado Sánchez, L. (2011). Teoría de los principios. Madrid: Marcial Pons.',
      link: '',
    },
    {
      referencia:
        'Barona Betancourt, Ricardo. (2015). Principales violaciones al derecho de asociación sindical. Bogotá: Universidad Externado de Colombia.',
    },
    {
      referencia:
        'Baylos, Antonio. (2011). Libertad sindical y representación de los trabajadores. En Derecho del trabajo: hacia una carta sociolaboral latinoamericana. Montevideo. Buenos Aires. B de F.',
      link: '',
    },
    {
      referencia:
        'Bernal Pulido, C. (2014). El principio de proporcionalidad y los derechos fundamentales (4ta ed.). Bogotá: Universidad Externado de Colombia. ',
    },
    {
      referencia:
        'Blanco Zúñiga, G. (2010). De la interpretación legal a la interpretación constitucional. Bogotá: Grupo Editorial Ibáñez.',
      link: '',
    },
    {
      referencia:
        'Bronstein, A. (2014). Derecho internacional del trabajo. Bogotá: Astrea.',
      link: '',
    },
    {
      referencia:
        'Canessa Montejo, M. (2014). Los Derechos Humanos Laborales en el Seno de la Organización Internacional del Trabajo (OIT) (2da ed.). Lima: Ediciones PLADES.',
      link: '',
    },
    {
      referencia:
        'Celis, J. (Ed.) (2012), la subcontratación laboral en América Latina: miradas multidimensionales. CLACSO – ENS, Buenos Aires, Argentina.',
      link: '',
    },
    {
      referencia:
        'Conti Parra, Augusto. (1981).  El fuero sindical, Bogotá, Colombia: Temis.',
      link: '',
    },
    {
      referencia:
        'DE LA GARZA- E., NEFFA J. (2010) Trabajo, identidad y acción colectiva, Universidad Nacional de Colombia, Bogotá D.C. ',
    },
    {
      referencia:
        'DURAND, Jean Pierre (2014) La Cadena Invisible, flujo tenso y servidumbre voluntaria, Fondo de Cultura Económica,',
      link: '',
    },
    {
      referencia:
        'Debido proceso en las relaciones-laborales. Manual de derechos Laborales. Escuela Nacional SindicaL Derecho de asociación en el mundo estudiantil: La revolución de los pingüinos ',
      link: 'https://www.youtube.com/watch?v=BRRMrZyQYxU',
    },
    {
      referencia:
        'Blanco Zúñiga, G. (2010). De la interpretación legal a la interpretación constitucional. Bogotá: Grupo Editorial Ibáñez.',
      link: '',
    },
    {
      referencia: 'Documental sobre los esclavos modernos ',
      link: 'https://www.youtube.com/watch?v=bO-u0w1Gx8E',
    },
    {
      referencia:
        'El trabajo como derecho humano fundamental Retomado de “Didácticas para la ciudadanía laboral”, Escuela Nacional Sindical.',
      link: '',
    },
    {
      referencia:
        'El-derecho-a-la-libertad-sindical-en-Colombia.- Manual de derechos Laborales. Escuela Nacional Sindical Escuela Nacional Sindical (2015). Manual de derechos laborales. La Patria.',
      link: '',
    },
    {
      referencia:
        'Francisco Serna Giraldo y Elver Herrera Arenas “Fundamentación y Defensa de los Derechos Laborales” – Escuela de Liderazgo Sindical democrático. Escuela Nacional Sindical.',
      link: '',
    },
    {
      referencia:
        'La negociación colectiva. Normas de la OIT y principios de los órganos de control. OIT Año 2000',
    },
    {
      referencia:
        'MARX, Karl. (1976). La ideología Alemana. En Obras Selectas, Tomo II. Editorial Progreso, Moscú. (1976). Crítica a la Economía Política. En Obras Selectas, Tomo II. Editorial Progreso, Moscú.',
      link: '',
    },
    {
      referencia:
        'MENDEZ MORALES, JOSE SILVESTRE, Fundamentos de Economía, Mac Graw Hill, 1993 México.',
    },
    {
      referencia:
        'Organización Internacional del Trabajo (2000). La negociación colectiva. OIT',
      link: '',
    },
    {
      referencia:
        'Organización Internacional del Trabajo (2009). Conocer los derechos fundamentales del trabajo. OIT',
      link: '',
    },
    {
      referencia:
        'OSTAU DE LAFONT DE LEÓN, Francisco Rafael. El Derecho internacional laboral. Bogotá: Universidad Católica de Colombia. 2015. ',
      link: '',
    },
    {
      referencia:
        'PRINCIPIOS DE LA OIT SOBRE EL DERECHO DE HUELGA. Bernard GERNIGON, Alberto ',
      link: '',
    },
    {
      referencia:
        'ODERO y Horacio  GUIDO, Revista internacional del trabajo volumen 17, (1998 Num.4) Ginebra Suiza Quinche Ramírez, M. (2014). El control de convencionalidad. Bogotá: Editorial Temis.',
      link: '',
    },
    {
      referencia:
        'Ramírez, J (2015). Curso de Derecho del Trabajo. Tirant lo blanch.',
    },
    {
      referencia:
        'RODRÍGUEZ, Cesar. (2010). El Derecho en América Latina. Siglo XXI editores. Bogotá D.C.',
      link: '',
    },
    {
      referencia:
        'RODRÍGUEZ, Mauricio. (2015). La Desprotección legal de los derechos constitucionales del trabajo. Versión PDF.',
      link: '',
    },
    {
      referencia:
        'RODRÍGUEZ, Mauricio. (2017). Activismo Judicial Territorial. Versión PDF',
      link: '',
    },
    {
      referencia:
        'SANTOS, Boaventura – MENECES, María Paula (2014). Epistemologías del Sur. Ediciones AKAL S.A. Madrid,',
      link: '',
    },
    {
      referencia:
        'España. SANTOS, Boaventura de Sousa, 1998. La Globalización del Derecho.',
      link: '',
    },
    {
      referencia:
        'SANTOS, Boaventura de Sousa. (2009). Sociología Jurídica Crítica. ILSA, Bogotá D.C.',
      link: '',
    },
    {
      referencia:
        'SARMIENTO, Libardo. (2003). Capitalismo y cambios estructurales en la economía Colombiana. En MARX VIVE. Universidad Nacional de Colombia, Bogotá.',
    },
    {
      referencia:
        'Sobre prestaciones sociales y obligaciones economicas del empleador . Manual de derechos Laborales.Escuela Nacional Sindical',
      link: '',
    },
    {
      referencia:
        'SOTELO, Adrián. (2012). Los rumbos del Trabajo, Superexplotación y precariedad social en el Siglo XXI. Porrua. ',
    },
    {
      referencia:
        'México. TOURAINE, Alain. (2011), Podremos vivir juntos? Fondo de Cultura Económica. México.',
      link: '',
    },
    {
      referencia:
        'Villegas Arbeláez, Jairo. (2014). Negociación colectiva y sindicatos de empleados públicos (6ta ed.). Bogotá, Colombia: Universidad Externado de Colombia.',
      link: '',
    },
    {
      referencia:
        'WEISS, Anita. (1997), Modernización industrial: empresas y trabajadores. Universidad Nacional de Colombia, Bogotá',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Acción de Tutela',
      significado:
        'Es la garantía constitucional que tiene toda persona a la protección judicial de sus derechos fundamentales a través de un recurso efectivo. La constitución señala claramente que: "La protección consistirá en una orden para aquél respecto de quien se solicita la tutela, actúe o se abstenga de hacerlo".',
    },
    {
      termino: 'Acción Pública',
      significado:
        'Se definen como acciones públicas, aquellas acciones jurídicas que las personas pueden presentar por su propia cuenta sin que medie necesariamente la representación de un abogado. Este tipo de acciones pueden ser elevadas por cualquier ciudadano, en las entidades de control y garantía de los derechos fundamentales. ',
    },
    {
      termino: 'Activismo Judicial Territorial',
      significado:
        'Consiste en una práctica específica de los grupos y las comunidades para promover el acceso a la justicia frente a vulneraciones de sus derechos, mediante la utilización de acciones públicas, y otros mecanismos de exigibilidad de los derechos. La movilización y la acción colectiva para la exigibilidad de los derechos es una de las prácticas que más crece en la demanda de derechos en América Latina, Estados Unidos y Europa, en el entendido que el derecho le pertenece a las personas y que las instituciones locales tienen la responsabilidad de protegerlos y garantizarlos.',
    },
    {
      termino: 'Derecho de petición',
      significado:
        'Es aquel derecho que tiene toda persona individual o jurídica, grupo, organización o asociación para solicitar información, documentación, o reclamar ante las autoridades competentes -normalmente los gobiernos o entidades públicas-, o ante quien se encuentre en estado de subordinación, como el empleador, por razones de interés público o particular, ya sea que se haga de forma individual, general o colectivo.',
    },
    {
      termino: 'Derecho Laboral',
      significado:
        'El derecho laboral (también conocido como derecho del trabajo o derecho social) es una rama del derecho cuyos principios y normas jurídicas tienen por objeto la tutela del trabajo humano realizado en forma libre, por cuenta ajena, en relación de dependencia y a cambio de una contraprestación.',
    },
    {
      termino: 'Derechos de solidaridad o de los pueblos',
      significado:
        'Los derechos de solidaridad, o también llamados derechos de los pueblos, son las exigencias más recientes en el tiempo, son derechos que optimizan el desarrollo de una persona en un ambiente apropiado. Son caracterizados porque se vinculan con la solidaridad, cubren a pueblos o la humanidad entera y no solamente a individuos, contemplan al ser humano en su universalidad y buscan garantías para la humanidad como un todo. Según la clasificación de las tres generaciones de derechos humanos,  se los denomina como derechos de tercera generación. ',
    },
    {
      termino: 'Derechos de tercera generación',
      significado:
        'los Derechos de Tercera Generación también conocidos como Derechos de Solidaridad o de los Pueblos contemplan cuestiones de carácter supranacional como el derecho a la paz y a un medio ambiente sano. Surgen como respuesta a la necesidad de cooperación entre las naciones y los distintos grupos que las integran. Comprende tres tipos de derechos: civiles y políticos; económicos, sociales y culturales; y de cooperación entre los pueblos. Pertenecen a los distintos grupos que conforman una nación y a las naciones entre sí. Su titular es el Estado, pero también pueden ser reclamados ante el propio Estado por los grupos pertenecientes al mismo, y ante otro Estado, en el caso de la comunidad internacional: de nación a nación.',
    },
    {
      termino: 'Derechos de territorialidad',
      significado:
        'Hacen relación a los derechos de los pueblos indígenas, negritudes, raizales, palenqueros, en estos derechos se  establece el reconocimiento y el  respeto de las costumbres, las tradiciones y los sistemas de tenencia de la tierra de estos pueblos. En el caso de Colombia, como nación multiétnica y pluricultural, se ha establecido que estas comunidades tienen derecho a decidir sobre sus territorios. En este sentido, el Estado debe tomar las medidas necesarias para determinar las tierras ocupadas y garantizar la protección efectiva de sus derechos de propiedad y posesión. ',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Se define «el desarrollo sostenible como la satisfacción de «las necesidades de la generación presente sin comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades». (Informe titulado «Nuestro futuro común» de 1987, Comisión Mundial sobre el Medio Ambiente y el Desarrollo) el desarrollo sostenible ha emergido como el principio rector para el desarrollo mundial a largo plazo. Consta de tres pilares, el desarrollo sostenible trata de lograr, de manera equilibrada, el desarrollo económico, el desarrollo social y la protección del medio ambiente.',
    },
    {
      termino: 'Dignidad de los pueblos',
      significado:
        'Una variable construida a partir del reconocimiento de la materialización de los derechos  y la línea de redistribución  de los mismos asociada a la equidad, igualdad e identidad en los derechos fundamentales en el trabajo. ',
    },
    {
      termino: 'Equidad laboral',
      significado:
        'La equidad laboral  hace referencia a la igualdad en lo que a raza, origen o religión se refiere, en un mundo en el que las oleadas migratorias son el pan de cada día. De hecho, el objetivo final es que cualquier trabajador tenga los mismos derechos en una empresa o institución sea cual sea su origen, sus creencias o su sexo/ sexualidad. En conclusión, la equidad laboral es aquello que debería regir los puestos de trabajo de todos los ciudadanos del mundo.',
    },
    {
      termino: 'Identidad cultural',
      significado:
        'Es un conjunto de valores, tradiciones, símbolos, creencias y modos de comportamiento que funcionan como elementos dentro de un grupo social y que actúan para que los individuos que lo forman puedan fundamentar su sentimiento de pertenencia que hacen parte a la diversidad al interior de las mismas en respuesta a los intereses, códigos, normas y rituales que comparten dichos grupos dentro de la cultura dominante. ',
    },
    {
      termino: 'Identidad nacional',
      significado:
        'Se entiende por identidad nacional aquella identidad de una persona que se relaciona con la nación a la cual pertenece, sea esta por haber nacido en tal territorio, por formar parte de una comunidad o por sentir lazos de pertenencia con las costumbres y tradiciones de tal nación.',
    },
    {
      termino: 'Igualdad laboral',
      significado:
        'Hace referencia a que todos los trabajadores son iguales ante la ley, tienen las mismas protección y garantías, y, en consecuencia, queda abolida toda distinción jurídica entre los trabajadores por razón del carácter intelectual o material de la labor, su forma o retribución, salvo las excepciones establecidas por la Ley” Documento recuperado 06 – 06 – 2018, http://www.eluniversal.com.co/consultorio/laboral/ derecho-la-igualdad-y-proteccion-especial-de-trabajadores-sindicalizados',
    },
    {
      termino: 'Libertad sindical',
      significado:
        'La libertad sindical es un derecho fundamental de los trabajadores y sus organizaciones para agruparse y defender sus intereses comunes. Cabe destacar que dicha noción comprende todos los atributos de la libertad sindical, tanto en perspectiva individual como colectiva, garantizando la actividad previa y necesaria para constituir sindicatos, debiendo reconocerse sus pilares que son organización, regulación, representación, negociación y huelga, y su objeto, que es la defensa de los intereses comunes. La libertad sindical de los trabajadores para crear, organizar y afiliarse a sindicatos libremente y sin injerencias del Estado o de los empleadores, es considerada como un derecho humano fundamental, y así lo establece el artículo 39 de la Constitución Colombiana',
    },
    {
      termino: 'Normas Internacionales del Trabajo',
      significado:
        'Las normas internacionales del trabajo (NIT) son instrumentos jurídicos elaborados por los mandantes (gobiernos, empleadores y trabajadores) de la Organización Internacional del Trabajo, en los que se sientan principios y derechos básicos en el trabajo.',
    },
    {
      termino: 'Sindicato',
      significado:
        'El sindicato es una asociación integrada por trabajadores o empleadores que se agrupan en defensa y promoción de sus intereses sociales, económicos y profesionales relacionados con su actividad laboral o con respecto al centro de producción. Los sindicatos por lo general negocian en nombre de sus afiliados (negociación colectiva) los salarios y condiciones de trabajo (jornada, descansos, vacaciones, licencias, capacitación profesional, beneficios extralegales, etc.) dando lugar a la negociación y al contrato colectivo de trabajo. El sindicato de trabajadores tiene como objetivo principal el bienestar de sus miembros o sindicalizados y generar mediante la unidad, la suficiente fuerza y capacidad de negociación como para establecer una dinámica de diálogo social entre el empleador y los trabajadores.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fredy Gabriel Martínez Loza',
        cargo: 'Experto disciplinar',
        centro:
          'Centro de Desarrollo Agroempresarial de Chía - Regional Cundinamarca',
      },
      {
        nombre: 'Josué Dario Niño Riaño',
        cargo: 'Experto disciplinar',
        centro:
          'Centro de Desarrollo Agroempresarial de Chía - Regional Cundinamarca',
      },
      {
        nombre: 'José Adriano Valentín',
        cargo: 'Experto disciplinar',
        centro:
          'Centro de Desarrollo Agroempresarial de Chía - Regional Cundinamarca',
      },
      {
        nombre: 'Luis Fernando Botero',
        cargo: 'Evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito Capital ',
      },
      {
        nombre: 'Octavio Jaramillo Ossa',
        cargo: 'Experto disciplinar',
        centro:
          'Centro de Desarrollo Agroempresarial de Chía - Regional Cundinamarca',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Zenen Arevalo Mantilla',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Alvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
