// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const disciplineData = [
  {
    id: "automotores",
    title: "Automotores",
    titleUppercase: "AUTOMOTORES",
    favicon: "/automotores2.ico",
    resolucion: "4152",
    text: "Insertar texto",
    text_about_part1: 'Estudiar automotores puede ser una excelente opción para los estudiantes de escuela secundaria que tengan interés en el mundo del automovilismo y la tecnología. El perfil del Técnico en Automotores habilita a los egresados a desarrollar diversas actividades en el campo de los vehículos, desde el diseño y construcción de partes y conjuntos, hasta la supervisión de ensayos finales y la planificación de servicios de mantenimiento de flotas de automóviles.',
    text_about_part2: 'Además, el avance tecnológico de los automóviles y la creciente demanda en el mercado hacen de la industria automotriz un sector en constante crecimiento y renovación. La formación como Técnico en Automotores permite a los estudiantes estar a la vanguardia de la innovación y adquirir habilidades técnicas específicas que les permitirán desempeñarse profesionalmente en distintas áreas, ya sea trabajando para talleres de reparación, empresas de servicios de flotas, o incluso en emprendimientos personales. En resumen, estudiar automotores puede ser una opción muy interesante para aquellos estudiantes que quieran especializarse en un campo en constante evolución y con una gran cantidad de oportunidades laborales.',
    text_future_part1: 'La carrera de Automotores es considerada una de las carreras del futuro debido a la creciente demanda de profesionales especializados en la industria automotriz. En la actualidad, los automóviles y otros vehículos forman parte de la vida cotidiana y se han convertido en un medio de transporte esencial para las personas en todo el mundo. La tecnología de los vehículos se está desarrollando rápidamente y es necesario contar con técnicos capacitados que puedan reparar y mantener estos sistemas complejos. Además, la industria automotriz se está expandiendo a nivel global y se están desarrollando nuevos modelos de vehículos eléctricos, híbridos y autónomos, lo que aumenta la demanda de profesionales especializados en estas áreas.',
    text_future_part2: 'Estudiar Automotores también ofrece la posibilidad de trabajar en un campo que ofrece una gran variedad de oportunidades de carrera. Los graduados pueden trabajar en talleres de reparación de automóviles, concesionarios de automóviles, empresas de transporte, empresas de fabricación de piezas y otros tipos de empresas relacionadas con la industria automotriz. Además, los profesionales especializados en automóviles también pueden emprender su propio negocio, lo que les permite ser su propio jefe y tener mayor libertad y flexibilidad en su trabajo. Estudiar Automotores es una excelente opción para aquellos estudiantes que deseen desarrollar habilidades técnicas y especializadas en un campo en constante evolución y con una gran cantidad de oportunidades de carrera.',
    text_practice_part1: 'Las prácticas profesionalizantes son una parte fundamental de la formación de un Técnico en Automotores en una escuela secundaria. A través de estas prácticas, los estudiantes tienen la oportunidad de aplicar los conocimientos teóricos adquiridos en el aula en un entorno real de trabajo. Además, pueden adquirir experiencia y habilidades prácticas que les permitirán destacarse en el mercado laboral. Durante las prácticas, los estudiantes pueden trabajar en talleres de reparación de automóviles, concesionarios de automóviles y empresas de servicios de transporte. Los estudiantes pueden participar en la reparación de motores, transmisiones, sistemas eléctricos y electrónicos, entre otros aspectos. También pueden adquirir habilidades en el diagnóstico y resolución de problemas, la gestión de inventarios y la atención al cliente. Las prácticas profesionalizantes son una oportunidad para que los estudiantes aprendan de los mejores profesionales del sector y se familiaricen con los últimos avances tecnológicos en la industria automotriz.',
    imagesData: [
      {
        imgId: 1,
        url: 'https://source.unsplash.com/random/?forest',
        altDescription: ''
      },
      {
        imgId: 2,
        url: 'https://source.unsplash.com/random/?travel',
        altDescription: ''
      },
      {
        imgId: 3,
        url: 'https://source.unsplash.com/random/?food',
        altDescription: ''
      },
      {
        imgId: 4,
        url: 'https://source.unsplash.com/random/?fashion',
        altDescription: ''
      },
      {
        imgId: 5,
        url: 'https://source.unsplash.com/random/?nature',
        altDescription: ''
      },
      {
        imgId: 6,
        url: 'https://source.unsplash.com/random/?business',
        altDescription: ''
      },
      {
        imgId: 7,
        url: 'https://source.unsplash.com/random/?cars',
        altDescription: ''
      },
      {
        imgId: 8,
        url: 'https://source.unsplash.com/random/?health',
        altDescription: ''
      },
      {
        imgId: 9,
        url: 'https://source.unsplash.com/random/?people',
        altDescription: ''
      },
      {
        imgId: 10,
        url: 'https://source.unsplash.com/random/?animals',
        altDescription: ''
      }
    ],
    subjectPerYear: [
      {
        year: 'Primer Año',
        imageUrl: 'https://source.unsplash.com/random/?forest',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Segundo Año',
        imageUrl: 'https://source.unsplash.com/random/?travel',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Tercer Año',
        imageUrl: 'https://source.unsplash.com/random/?food',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Cuarto Año',
        imageUrl: 'https://source.unsplash.com/random/?fashion',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Quinto Año',
        imageUrl: 'https://source.unsplash.com/random/?nature',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Sexto Año',
        imageUrl: 'https://source.unsplash.com/random/?forest',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      }
    ]
  },
  {
    id: "computacion",
    title: "Computacion",
    titleUppercase: "COMPUTACION",
    favicon: "/computacion.ico",
    resolucion: "4147",
    text: "Insertar texto",
    text_about_part1: ' La computación es una disciplina cada vez más importante en el mundo actual, y existen muchas razones por las cuales estudiarla puede ser beneficioso. En primer lugar, el campo de la computación ofrece un amplio abanico de oportunidades laborales en áreas como el desarrollo de software, la seguridad informática, la inteligencia artificial, el análisis de datos y la gestión de proyectos tecnológicos. Además, la demanda de profesionales capacitados en computación es cada vez mayor, lo que significa que hay una gran cantidad de trabajos disponibles en este campo.',
    text_about_part2: 'Otra razón importante para estudiar computación es que la tecnología está cada vez más presente en nuestra vida diaria, y esto seguirá siendo así en el futuro. La capacidad de comprender cómo funcionan los sistemas informáticos, de programar aplicaciones y de manejar herramientas de software se está convirtiendo en una habilidad esencial en casi todos los campos, desde la medicina hasta el periodismo. Por lo tanto, estudiar computación puede ser una forma de prepararse para el futuro, ya sea para tener una carrera en el campo de la tecnología o simplemente para tener las habilidades necesarias para navegar en un mundo cada vez más digitalizado.',
    text_future_part1: 'La computación se considera una de las carreras del futuro debido a la creciente dependencia de la tecnología en nuestras vidas. Cada vez más empresas y organizaciones están adoptando soluciones tecnológicas para optimizar sus procesos, mejorar la eficiencia y aumentar la rentabilidad. Además, la demanda de especialistas en tecnología de la información está creciendo en todo el mundo, y se espera que continúe aumentando en los próximos años. Los profesionales de la computación tienen la oportunidad de trabajar en una amplia variedad de campos, incluyendo la programación, el diseño web, la seguridad informática, el análisis de datos y la inteligencia artificial.',
    text_future_part2: 'Otro factor que hace que la computación sea una de las carreras del futuro es la constante evolución de la tecnología. Los avances en la computación y la tecnología de la información se están produciendo a un ritmo acelerado, lo que significa que los profesionales de la computación deben estar siempre actualizados en las últimas tendencias y tecnologías. Además, la computación es una carrera que ofrece la posibilidad de desarrollar habilidades en constante evolución y aprender nuevas tecnologías. Esto hace que sea una carrera emocionante y desafiante que puede proporcionar muchas oportunidades para el crecimiento personal y profesional.',
    text_practice_part1: 'Las prácticas profesionalizantes son una excelente oportunidad para que los estudiantes de la carrera de Técnico en Computación puedan aplicar los conocimientos teóricos adquiridos en el aula en situaciones reales de trabajo. Esta experiencia les permitirá integrarse al mundo laboral y conocer de cerca el funcionamiento de una empresa o institución. Durante las prácticas profesionalizantes, los estudiantes tendrán la oportunidad de poner en práctica las habilidades técnicas que han aprendido, tales como la proyección, producción, adaptación, implantación y mantenimiento de aplicaciones informáticas y sistemas informáticos. Además, podrán aprender a trabajar en equipo, desarrollar habilidades de comunicación y mejorar su capacidad para solucionar problemas y tomar decisiones.',
    imagesData: [
      {
        imgId: 1,
        url: 'https://source.unsplash.com/random/?forest',
        altDescription: ''
      },
      {
        imgId: 2,
        url: 'https://source.unsplash.com/random/?travel',
        altDescription: ''
      },
      {
        imgId: 3,
        url: 'https://source.unsplash.com/random/?food',
        altDescription: ''
      },
      {
        imgId: 4,
        url: 'https://source.unsplash.com/random/?fashion',
        altDescription: ''
      },
      {
        imgId: 5,
        url: 'https://source.unsplash.com/random/?nature',
        altDescription: ''
      },
      {
        imgId: 6,
        url: 'https://source.unsplash.com/random/?business',
        altDescription: ''
      },
      {
        imgId: 7,
        url: 'https://source.unsplash.com/random/?cars',
        altDescription: ''
      },
      {
        imgId: 8,
        url: 'https://source.unsplash.com/random/?health',
        altDescription: ''
      },
      {
        imgId: 9,
        url: 'https://source.unsplash.com/random/?people',
        altDescription: ''
      },
      {
        imgId: 10,
        url: 'https://source.unsplash.com/random/?animals',
        altDescription: ''
      }
    ],
    subjectPerYear: [
      {
        year: 'Primer Año',
        imageUrl: 'https://source.unsplash.com/random/?forest',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Segundo Año',
        imageUrl: 'https://source.unsplash.com/random/?travel',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Tercer Año',
        imageUrl: 'https://source.unsplash.com/random/?food',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Cuarto Año',
        imageUrl: 'https://source.unsplash.com/random/?fashion',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Quinto Año',
        imageUrl: 'https://source.unsplash.com/random/?nature',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Sexto Año',
        imageUrl: 'https://source.unsplash.com/random/?forest',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      }
    ]
  },
  {
    id: "mecanica",
    title: "Mecanica",
    titleUppercase: "MECANICA",
    favicon: "/mecanica.ico",
    resolucion: "4144",
    text: "Insertar texto",
    text_about_part1: "La mecánica es una disciplina técnica que tiene múltiples aplicaciones en diversos ámbitos industriales, desde el diseño y construcción de máquinas, hasta el mantenimiento y operación de equipos e instalaciones. Estudiar mecánica implica adquirir conocimientos teóricos y prácticos en distintas áreas, tales como sistemas neumáticos, oleohidráulicos, térmicos, eléctricos, hidráulicos, entre otros, así como también habilidades en el manejo de herramientas y dispositivos necesarios para llevar a cabo el diseño, cálculo, dirección y construcción de diversos elementos mecánicos.",
    text_about_part2: "Además, el estudio de la mecánica brinda al técnico la capacidad de proponer soluciones técnicas e ideas innovadoras para optimizar productos existentes o generar nuevos, lo que se traduce en un valor agregado para las empresas y organizaciones en las que se desempeña. Asimismo, el técnico mecánico puede supervisar y/o efectuar ensayos y llevar a cabo tareas de mantenimiento preventivo, correctivo y predictivo, lo que se traduce en una gestión más eficiente de los recursos y equipos disponibles.",
    text_future_part1: "Por supuesto que es una de las carreras del futuro debido a su gran relevancia en la industria y la tecnología. Los avances tecnológicos y la necesidad de mejorar la eficiencia y la productividad en la industria han generado una alta demanda de profesionales capacitados en mecánica. Los ingenieros mecánicos son responsables de diseñar, fabricar, mantener y mejorar una amplia variedad de sistemas y maquinarias, desde motores de combustión interna hasta sistemas de energía renovable y robótica avanzada. Además, la mecánica es una disciplina interdisciplinaria que se relaciona con muchas otras áreas como la electrónica, la informática, la física y la matemática, lo que la convierte en una carrera altamente versátil y adaptable a diferentes contextos.",
    text_future_part2: "Otro factor que contribuye a la relevancia de la mecánica como carrera del futuro es la creciente preocupación por el medio ambiente y la sostenibilidad. Los ingenieros mecánicos tienen un papel clave en el desarrollo de soluciones tecnológicas que permitan reducir el impacto ambiental de las actividades industriales y comerciales. Desde la creación de sistemas de energía renovable hasta la optimización de procesos productivos para reducir el consumo de recursos naturales, la mecánica ofrece un amplio campo de acción para quienes desean contribuir a la protección del planeta y el desarrollo sostenible.",
    text_practice_part1: "Son una parte crucial de cualquier carrera, y esto es especialmente cierto en el campo de la mecánica. Durante la carrera, los estudiantes tienen la oportunidad de aplicar lo que han aprendido en un entorno real y adquirir experiencia práctica. Además, las prácticas también les permiten establecer contactos en la industria y aprender de profesionales experimentados. Al completar prácticas profesionales, los estudiantes pueden identificar áreas en las que necesitan mejorar y obtener una mejor comprensión de cómo funciona la industria. Las prácticas profesionales también son una oportunidad para que los estudiantes demuestren su valor a posibles empleadores y, en algunos casos, incluso asegurar trabajos después de la graduación.",
    imagesData: [
      {
        imgId: 1,
        url: 'https://source.unsplash.com/random/?forest',
        altDescription: ''
      },
      {
        imgId: 2,
        url: 'https://source.unsplash.com/random/?travel',
        altDescription: ''
      },
      {
        imgId: 3,
        url: 'https://source.unsplash.com/random/?food',
        altDescription: ''
      },
      {
        imgId: 4,
        url: 'https://source.unsplash.com/random/?fashion',
        altDescription: ''
      },
      {
        imgId: 5,
        url: 'https://source.unsplash.com/random/?nature',
        altDescription: ''
      },
      {
        imgId: 6,
        url: 'https://source.unsplash.com/random/?business',
        altDescription: ''
      },
      {
        imgId: 7,
        url: 'https://source.unsplash.com/random/?cars',
        altDescription: ''
      },
      {
        imgId: 8,
        url: 'https://source.unsplash.com/random/?health',
        altDescription: ''
      },
      {
        imgId: 9,
        url: 'https://source.unsplash.com/random/?people',
        altDescription: ''
      },
      {
        imgId: 10,
        url: 'https://source.unsplash.com/random/?animals',
        altDescription: ''
      }
    ],
    subjectPerYear: [
      {
        year: 'Primer Año',
        imageUrl: 'https://source.unsplash.com/random/?forest',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Segundo Año',
        imageUrl: 'https://source.unsplash.com/random/?travel',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Tercer Año',
        imageUrl: 'https://source.unsplash.com/random/?food',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Cuarto Año',
        imageUrl: 'https://source.unsplash.com/random/?fashion',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Quinto Año',
        imageUrl: 'https://source.unsplash.com/random/?nature',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      },
      {
        year: 'Sexto Año',
        imageUrl: 'https://source.unsplash.com/random/?forest',
        subjectName: [
          {
            name: 'Materia 1',
            hs: '01Hs'
          },
          {
            name: 'Materia 2',
            hs: '02Hs'
          },
          {
            name: 'Materia 3',
            hs: '03Hs'
          },
          {
            name: 'Materia 4',
            hs: '04Hs'
          },
          {
            name: 'Materia 5',
            hs: '05Hs'
          },
          {
            name: 'Materia 6',
            hs: '06Hs'
          },
          {
            name: 'Materia 7',
            hs: '07Hs'
          },
          {
            name: 'Materia 8',
            hs: '08Hs'
          },
          {
            name: 'Materia 9',
            hs: '09Hs'
          },
          {
            name: 'Materia 10',
            hs: '10Hs'
          },
          {
            name: 'Materia 11',
            hs: '11Hs'
          },
          {
            name: 'Materia 12',
            hs: '12Hs'
          }
        ]
      }
    ]
  }
]

export default disciplineData;