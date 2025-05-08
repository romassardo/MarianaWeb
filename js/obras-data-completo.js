/**
 * Datos completos de las obras de Mariana Tirantte
 * Información basada en las imágenes extraídas del PowerPoint y documentación adicional
 */

const obrasData = [
    // Obras principales que ya teníamos definidas
    {
        id: "obra-1",
        titulo: "Los años",
        año: "2023",
        teatro: "Teatro San Martín",
        director: "Mariano Pensotti",
        descripcion: "Imponente dispositivo escénico que presenta un departamento desdoblado, con características edilicias casi idénticas pero diferentes temporalidades. A la izquierda se desarrollan acontecimientos que transcurren en 2020 y a la derecha, los mismos personajes en el año 2050. Una meditación visual sobre el paso del tiempo y la transformación de los individuos a través de las décadas.",
        colaboradores: "Grupo Marea (Mariano Pensotti, Diego Vainer, Florencia Wasser)",
        imagenes: ["img/obras/obra69_diamante-direccion-mariano-pensotti.jpg", "img/obras/obra70_diamante-direccion-mariano-pensotti.jpg"]
    },
    {
        id: "obra-2",
        titulo: "Cae la noche tropical",
        año: "2022",
        teatro: "Teatro San Martín",
        director: "Pablo Messiez",
        descripcion: "Adaptación de la novela homónima de Manuel Puig. Tirantte crea un espacio multifuncional que balancea intimidad y amplitud para esta historia que transcurre principalmente en un departamento de Río de Janeiro, donde dos hermanas ancianas comparten recuerdos y se sumergen en las historias de sus vecinos.",
        colaboradores: "Pablo Messiez, Complejo Teatral de Buenos Aires",
        imagenes: ["img/obras/obra77_cae-la-noche-tropical-direccion-pablo-messiez.jpg", "img/obras/obra78_cae-la-noche-tropical-direccion-pablo-messiez.jpg", "img/obras/obra79_cae-la-noche-tropical-direccion-pablo-messiez.jpg"]
    },
    {
        id: "obra-3",
        titulo: "Cineastas",
        año: "2013",
        teatro: "Teatro Sarmiento",
        director: "Mariano Pensotti",
        descripcion: "Dispositivo escénico en dos niveles que representa simultáneamente las vidas personales de cuatro cineastas (nivel inferior) y las películas que están rodando (nivel superior). Esta estructura arquitectónica permite explorar visualmente la relación entre vida y ficción, realidad y representación, en un juego constante de espejos y referencias cruzadas.",
        colaboradores: "Grupo Marea (Mariano Pensotti, Diego Vainer, Florencia Wasser)",
        imagenes: ["img/obras/obra40_cineastas-direccion-mariano-pensotti.jpg", "img/obras/obra41_cineastas-direccion-mariano-pensotti.jpg", "img/obras/obra42_cineastas-direccion-mariano-pensotti.jpg", "img/obras/obra43_cineastas-direccion-mariano-pensotti.jpg"]
    },
    {
        id: "obra-4",
        titulo: "El pasado es un animal grotesco",
        año: "2010",
        teatro: "Teatro Sarmiento",
        director: "Mariano Pensotti",
        descripcion: "Escenografía basada en un disco giratorio que funciona como plataforma en constante movimiento donde cuatro actores representan múltiples historias que abarcan diez años (1999-2009) en la vida de cuatro personajes. El dispositivo circular alude al paso del tiempo y a la transformación continua de los personajes, mientras permite transiciones fluidas entre numerosos espacios y temporalidades.",
        colaboradores: "Grupo Marea, festivales internacionales (Kunsten Festival des Arts, Festival de Otoño de Madrid, Theaterformen)",
        imagenes: ["img/obras/obra9_el-pasado-es-un-animal-grotesco-direccion-mariano-pensotti.jpg"]
    },
    {
        id: "obra-5",
        titulo: "Arde brillante en los bosques de la noche",
        año: "2017",
        teatro: "Teatro San Martín",
        director: "Mariano Pensotti",
        descripcion: "Una exploración visual y conceptual sobre los sentimientos revolucionarios y la transformación social. La escenografía propone un espacio dividido y fragmentado que refleja las tensiones políticas y personales de los personajes.",
        colaboradores: "Grupo Marea (Mariano Pensotti, Diego Vainer, Florencia Wasser)",
        imagenes: ["img/obras/obra50_arde-brillante-en-los-bosques-de-la-noche-direccion-mariano-pensotti.jpg", "img/obras/obra51_arde-brillante-en-los-bosques-de-la-noche-direccion-mariano-pensotti.jpg", "img/obras/obra52_arde-brillante-en-los-bosques-de-la-noche-direccion-mariano-pensotti.jpg"]
    },
    {
        id: "obra-6",
        titulo: "Campo Minado",
        año: "2016",
        teatro: "Royal Court Theatre",
        director: "Lola Arias",
        descripcion: "Una pieza sobre la Guerra de Malvinas que reúne a veteranos argentinos y británicos. El diseño escenográfico crea un espacio versátil donde conviven elementos documentales, autobiográficos y performativos, permitiendo un diálogo entre memorias e historias enfrentadas.",
        colaboradores: "Lola Arias",
        imagenes: ["img/obras/obra53_campo-minado-direccion-lola-arias.jpg", "img/obras/obra54_campo-minado-direccion-lola-arias.jpg", "img/obras/obra55_campo-minado-direccion-lola-arias.jpg", "img/obras/obra56_campo-minado-direccion-lola-arias.jpg"]
    },
    {
        id: "obra-7",
        titulo: "Melancolía y Manifestaciones",
        año: "2017",
        teatro: "Teatro Sarmiento",
        director: "Lola Arias",
        descripcion: "Obra autobiográfica donde Lola Arias explora la depresión de su madre. Tirantte crea un espacio contenedor y simbólico para este biodrama íntimo, utilizando elementos visuales que materializan estados mentales y emocionales complejos, creando un puente entre la experiencia interior y la representación escénica.",
        colaboradores: "Lola Arias",
        imagenes: ["img/obras/obra16_melancolia-y-manifestaciones-direccion-lola-arias.jpg"]
    },
    {
        id: "obra-8",
        titulo: "Beatriz Cenci",
        año: "2019",
        teatro: "Teatro Colón",
        director: "Mariano Pensotti",
        descripcion: "Nueva versión de la ópera de Alberto Ginastera sobre la historia de Beatriz Cenci, una noble italiana del siglo XVI. El diseño escenográfico crea un complejo dispositivo visual que combina elementos históricos con una reinterpretación contemporánea, estableciendo diálogos entre el pasado y el presente.",
        colaboradores: "Teatro Colón",
        imagenes: ["img/obras/obra80_beatriz-cenci-direccion-mariano-pensotti.jpg", "img/obras/obra81_beatriz-cenci-direccion-mariano-pensotti.jpg", "img/obras/obra82_beatriz-cenci-direccion-mariano-pensotti.jpg", "img/obras/obra83_beatriz-cenci-direccion-mariano-pensotti.jpg"]
    },
    {
        id: "obra-9",
        titulo: "Don Gil de las calzas verdes",
        año: "2018",
        teatro: "Teatro San Martín",
        director: "Pablo Maritano",
        descripcion: "Adaptación de la obra clásica de Tirso de Molina. La escenografía combina elementos del Siglo de Oro español con un tratamiento contemporáneo del espacio, creando un juego visual que acompaña las confusiones de identidad y los equívocos de la trama.",
        colaboradores: "Pablo Maritano, Complejo Teatral de Buenos Aires",
        imagenes: ["img/obras/obra87_don-gil-de-las-calzas-verdes-direccion-pablo-maritano.jpg", "img/obras/obra88_don-gil-de-las-calzas-verdes-direccion-pablo-maritano.jpg", "img/obras/obra89_don-gil-de-las-calzas-verdes-direccion-pablo-maritano.jpg", "img/obras/obra90_don-gil-de-las-calzas-verdes-direccion-pablo-maritano.jpg"]
    },
    // Obras adicionales del PowerPoint
    {
        id: "obra-10",
        titulo: "Colega de nadie",
        año: "2015",
        teatro: "Teatro Sarmiento",
        director: "Mariano Pensotti",
        descripcion: "Una exploración sobre la identidad individual y colectiva a través de narrativas fragmentadas. El espacio escénico propone una distribución no convencional que reconfigura la relación entre espectadores y performers.",
        colaboradores: "Grupo Marea",
        imagenes: ["img/obras/obra2_colega-de-nadie-direccion-mariano-pensotti.jpg"]
    },
    {
        id: "obra-11",
        titulo: "Antes",
        año: "2016",
        teatro: "Teatro Nacional Cervantes",
        director: "Pablo Messiez",
        descripcion: "Una reflexión sobre el tiempo y la memoria. La escenografía evoca espacios liminales entre lo público y lo privado, creando atmósferas que dialogan con la subjetividad de los personajes.",
        colaboradores: "Pablo Messiez",
        imagenes: ["img/obras/obra3_antes-direccion-pablo-messiez.jpg", "img/obras/obra4_antes-direccion-pablo-messiez.jpg", "img/obras/obra5_antes-direccion-pablo-messiez.jpg"]
    },
    {
        id: "obra-12",
        titulo: "Liquidación",
        año: "2015",
        teatro: "Teatro Sarmiento",
        director: "",
        descripcion: "Una exploración sobre el consumo y los valores materiales en la sociedad contemporánea. El espacio escénico utiliza elementos reconocibles del comercio minorista para crear una crítica visual sobre la obsolescencia programada y los ciclos de consumo.",
        colaboradores: "",
        imagenes: ["img/obras/obra6_liquidacion-direccion.jpg", "img/obras/obra7_liquidacion-direccion.jpg", "img/obras/obra8_liquidacion-direccion.jpg"]
    },
    {
        id: "obra-13",
        titulo: "Todos eran mis hijos",
        año: "2014",
        teatro: "Teatro San Martín",
        director: "Claudio Tolcachir",
        descripcion: "Adaptación de la obra de Arthur Miller. La escenografía propone un espacio doméstico cargado de significados simbólicos, donde los secretos familiares y las tensiones morales se materializan en la disposición física y los elementos visuales.",
        colaboradores: "Claudio Tolcachir, Complejo Teatral de Buenos Aires",
        imagenes: ["img/obras/obra10_todos-eran-mis-hijos-direccion-claudio-tolcachir.jpg"]
    },
    {
        id: "obra-14",
        titulo: "El pasajero",
        año: "2017",
        teatro: "Centro Cultural San Martín",
        director: "Ana Frenkel",
        descripcion: "Una exploración corporal y visual sobre el viaje y el desplazamiento. La escenografía crea espacios de tránsito y transformación que acompañan las metamorfosis de los performers.",
        colaboradores: "Ana Frenkel",
        imagenes: ["img/obras/obra11_el-pasajero-direccion-ana-frenkel.jpg"]
    },
    {
        id: "obra-15",
        titulo: "Hacia dónde caen las cosas",
        año: "2013",
        teatro: "El Extranjero",
        director: "Matías Feldman",
        descripcion: "Una investigación escénica sobre la gravedad y otras fuerzas físicas. El diseño espacial desafía las percepciones habituales a través de planos inclinados y estructuras en aparente desequilibrio, creando una poética visual en torno a la caída y la inestabilidad.",
        colaboradores: "Matías Feldman",
        imagenes: ["img/obras/obra12_hacia-donde-caien-las-cosas-direccion-matias-feldman.jpg"]
    },
    {
        id: "obra-16",
        titulo: "Pudor en animales de invierno",
        año: "2014",
        teatro: "Teatro Sarmiento",
        director: "Lisandro Rodríguez",
        descripcion: "Una exploración sobre la intimidad y la soledad contemporánea. La escenografía propone espacios mínimos y contenidos que reflejan el aislamiento emocional de los personajes.",
        colaboradores: "Lisandro Rodríguez",
        imagenes: ["img/obras/obra13_pudor-en-animales-de-invierno-direccion-lisandro-rodriguez.jpg"]
    },
    {
        id: "obra-17",
        titulo: "Alemania",
        año: "2015",
        teatro: "Teatro Nacional Cervantes",
        director: "Nacho Ciatti",
        descripcion: "Una reflexión sobre las relaciones históricas y culturales entre Argentina y Alemania. El espacio escénico combina referencias geográficas, históricas y personales, creando un palimpsesto visual donde se superponen diferentes capas de significación.",
        colaboradores: "Nacho Ciatti",
        imagenes: ["img/obras/obra14_alemania-direccion-nacho-ciatti.jpg"]
    },
    {
        id: "obra-18",
        titulo: "Ulises no sabe contar",
        año: "2016",
        teatro: "Centro Cultural Ricardo Rojas",
        director: "Ariel Farace",
        descripcion: "Una reinterpretación contemporánea del mito de Ulises centrada en la comunicación y la narrativa. La escenografía articula diferentes niveles de representación, creando un espacio donde lo mitológico y lo cotidiano se entrelazan.",
        colaboradores: "Ariel Farace",
        imagenes: ["img/obras/obra15_ulises-no-sabe-contar-direccion-ariel-farace.jpg"]
    },
    {
        id: "obra-19",
        titulo: "El paraíso (instalación)",
        año: "2015",
        teatro: "Centro Cultural Recoleta",
        director: "Mariano Pensotti",
        descripcion: "Instalación escénica que explora las ideas de utopía y paraíso en la cultura contemporánea. El diseño propone un recorrido inmersivo donde los visitantes experimentan diferentes visiones del paraíso a través de objetos, imágenes y sonidos.",
        colaboradores: "Grupo Marea",
        imagenes: ["img/obras/obra20_el-paraiso-instalacion-direccion-mariano-pensotti.jpg", "img/obras/obra21_el-paraiso-instalacion-direccion-mariano-pensotti.jpg", "img/obras/obra22_el-paraiso-instalacion-direccion-mariano-pensotti.jpg", "img/obras/obra23_el-paraiso-instalacion-direccion-mariano-pensotti.jpg"]
    },
    {
        id: "obra-20",
        titulo: "Chau papá",
        año: "2016",
        teatro: "Teatro Payró",
        director: "Manuel Vicente",
        descripcion: "Una exploración de las relaciones paterno-filiales y la figura ausente del padre. La escenografía utiliza espacios fragmentados y objetos cargados de significación emocional y biográfica.",
        colaboradores: "Manuel Vicente",
        imagenes: ["img/obras/obra24_chau-papa-direccion-manuel-vicente.jpg", "img/obras/obra25_chau-papa-direccion-manuel-vicente.jpg", "img/obras/obra26_chau-papa-direccion-manuel-vicente.jpg"]
    },
    {
        id: "obra-21",
        titulo: "Espacios para la memoria (instalación)",
        año: "2018",
        teatro: "Parque de la Memoria",
        director: "",
        descripcion: "Instalación que reflexiona sobre la memoria histórica y los espacios de conmemoración. El diseño crea un recorrido sensorial y simbólico que invita a los espectadores a activar diferentes capas de memoria personal y colectiva.",
        colaboradores: "",
        imagenes: ["img/obras/obra27_espacios-para-la-memoria-instalacion.jpg", "img/obras/obra28_espacios-para-la-memoria-instalacion.jpg", "img/obras/obra29_espacios-para-la-memoria-instalacion.jpg", "img/obras/obra30_espacios-para-la-memoria-instalacion.jpg"]
    },
    {
        id: "obra-22",
        titulo: "Mi propia playa",
        año: "2017",
        teatro: "Teatro Sarmiento",
        director: "Agostina López",
        descripcion: "Una exploración sobre los espacios de ocio y los imaginarios de vacaciones. La escenografía recrea y deconstruye elementos típicos de paisajes costeros, generando un diálogo entre lo natural y lo artificial.",
        colaboradores: "Agostina López",
        imagenes: ["img/obras/obra31_mi-propia-playa-direccion-agostina-lopez.jpg", "img/obras/obra32_mi-propia-playa-direccion-agostina-lopez.jpg", "img/obras/obra33_mi-propia-playa-direccion-agostina-lopez.jpg"]
    },
    {
        id: "obra-23",
        titulo: "Distancia",
        año: "2014",
        teatro: "Centro Cultural San Martín",
        director: "Matías Umpierrez",
        descripcion: "Una investigación escénica sobre la distancia física y emocional. El diseño espacial articula diferentes planos y perspectivas, creando juegos visuales que amplían y comprimen la percepción de la distancia.",
        colaboradores: "Matías Umpierrez",
        imagenes: ["img/obras/obra34_distancia-direccion-matias-umpierrez.jpg", "img/obras/obra35_distancia-direccion-matias-umpierrez.jpg", "img/obras/obra36_distancia-direccion-matias-umpierrez.jpg"]
    },
    {
        id: "obra-24",
        titulo: "Constanza muere",
        año: "2015",
        teatro: "Teatro El Extranjero",
        director: "Ariel Farace",
        descripcion: "Una exploración poética sobre la muerte y el duelo. La escenografía crea un espacio liminal entre lo físico y lo etéreo, utilizando materiales traslúcidos y juegos de luz para materializar diferentes estados de la materia y la conciencia.",
        colaboradores: "Ariel Farace",
        imagenes: ["img/obras/obra37_constanza-muere-direccion-ariel-farace.jpg", "img/obras/obra38_constanza-muere-direccion-ariel-farace.jpg", "img/obras/obra39_constanza-muere-direccion-ariel-farace.jpg"]
    },
    {
        id: "obra-25",
        titulo: "Globo sobre el techo de un shopping",
        año: "2016",
        teatro: "Centro Cultural Recoleta",
        director: "Román Podolsky",
        descripcion: "Una crítica visual a los espacios de consumo y la cultura del centro comercial. El diseño escenográfico interviene y recontextualiza elementos típicos de los shoppings, generando extrañamiento y nuevas perspectivas sobre estos espacios cotidianos.",
        colaboradores: "Román Podolsky",
        imagenes: ["img/obras/obra44_globo-sobre-el-techo-de-un-shopping-direccion-roman-podolsky.jpg", "img/obras/obra45_globo-sobre-el-techo-de-un-shopping-direccion-roman-podolsky.jpg", "img/obras/obra46_globo-sobre-el-techo-de-un-shopping-direccion-roman-podolsky.jpg"]
    },
    {
        id: "obra-26",
        titulo: "Hoy es el día (instalación)",
        año: "2018",
        teatro: "Centro Cultural Recoleta",
        director: "Mariano Pensotti",
        descripcion: "Instalación participativa que invita a los espectadores a reflexionar sobre la experiencia del presente. El diseño crea dispositivos visuales y espaciales que alteran la percepción temporal, generando una experiencia inmersiva y reflexiva.",
        colaboradores: "Grupo Marea",
        imagenes: ["img/obras/obra47_hoy-es-el-dia-instalacion-direccion-mariano-pensotti.jpg", "img/obras/obra48_hoy-es-el-dia-instalacion-direccion-mariano-pensotti.jpg", "img/obras/obra49_hoy-es-el-dia-instalacion-direccion-mariano-pensotti.jpg"]
    },
    {
        id: "obra-27",
        titulo: "No va más",
        año: "2017",
        teatro: "Teatro Nacional Cervantes",
        director: "Enrique Federman",
        descripcion: "Una obra que explora los juegos de azar y la ludopatía. La escenografía recrea y deconstruye elementos de casinos y salas de juego, creando un espacio que refleja tanto la fascinación como la alienación propias del mundo del juego.",
        colaboradores: "Enrique Federman",
        imagenes: ["img/obras/obra57_no-va-mas-direccion-enrique-federman.jpg", "img/obras/obra58_no-va-mas-direccion-enrique-federman.jpg"]
    },
    {
        id: "obra-28",
        titulo: "Espacio Mil Horas (instalación)",
        año: "2019",
        teatro: "Centro Cultural Recoleta",
        director: "",
        descripcion: "Instalación espacial que explora la percepción y medición del tiempo. El diseño crea un entorno inmersivo donde el espectador experimenta diferentes temporalidades a través de dispositivos visuales, sonoros y espaciales.",
        colaboradores: "",
        imagenes: ["img/obras/obra59_espacio-mil-horas-instalacion-espacial.jpg", "img/obras/obra60_espacio-mil-horas-instalacion-espacial.jpg", "img/obras/obra61_espacio-mil-horas-instalacion-espacial.jpg", "img/obras/obra62_espacio-mil-horas-instalacion-espacial.jpg"]
    },
    {
        id: "obra-29",
        titulo: "Petit el monstruo (instalación)",
        año: "2018",
        teatro: "Centro Cultural Recoleta",
        director: "",
        descripcion: "Instalación basada en el libro infantil de Isol. El diseño crea un recorrido lúdico y participativo que materializa el universo visual del libro, permitiendo a los visitantes sumergirse en sus dilemas morales y estéticos.",
        colaboradores: "",
        imagenes: ["img/obras/obra63_petit-el-monstruo-instalacion-espacial.jpg", "img/obras/obra64_petit-el-monstruo-instalacion-espacial.jpg", "img/obras/obra65_petit-el-monstruo-instalacion-espacial.jpg"]
    },
    {
        id: "obra-30",
        titulo: "En lo alto para siempre",
        año: "2019",
        teatro: "Teatro Sarmiento",
        director: "Camila Fabbri y Eugenia Pérez Tomás",
        descripcion: "Una exploración poética sobre la altura, la caída y el vértigo. La escenografía propone espacios que desafían la percepción gravitatoria, creando sensaciones físicas que complementan el desarrollo dramático.",
        colaboradores: "Camila Fabbri, Eugenia Pérez Tomás",
        imagenes: ["img/obras/obra66_en-lo-alto-para-siempre-direccion-camila-fabbri-y-eugenia-perez-tomas.jpg", "img/obras/obra67_en-lo-alto-para-siempre-direccion-camila-fabbri-y-eugenia-perez-tomas.jpg", "img/obras/obra68_en-lo-alto-para-siempre-direccion-camila-fabbri-y-eugenia-perez-tomas.jpg"]
    },
    {
        id: "obra-31",
        titulo: "Diamante",
        año: "2018",
        teatro: "Teatro San Martín",
        director: "Mariano Pensotti",
        descripcion: "Una obra que explora las relaciones entre Latinoamérica y Europa a través de historias cruzadas. La escenografía propone un dispositivo que permite la coexistencia de diferentes espacios y temporalidades, reflejando la fragmentación y las conexiones de las narrativas presentadas.",
        colaboradores: "Grupo Marea",
        imagenes: ["img/obras/obra69_diamante-direccion-mariano-pensotti.jpg", "img/obras/obra70_diamante-direccion-mariano-pensotti.jpg", "img/obras/obra71_diamante-direccion-mariano-pensotti.jpg", "img/obras/obra72_diamante-direccion-mariano-pensotti.jpg"]
    },
    {
        id: "obra-32",
        titulo: "Enobarbo",
        año: "2017",
        teatro: "Teatro Nacional Cervantes",
        director: "Osqui Guzmán",
        descripcion: "Una reinterpretación del personaje de Enobarbo de 'Antonio y Cleopatra' de Shakespeare. El diseño escenográfico propone un espacio que fusiona elementos de la Roma antigua con referencias contemporáneas, creando un diálogo temporal que potencia las resonancias actuales del texto clásico.",
        colaboradores: "Osqui Guzmán",
        imagenes: ["img/obras/obra73_enobarbo-direccion-osqui-guzman.jpg", "img/obras/obra74_enobarbo-direccion-osqui-guzman.jpg", "img/obras/obra75_enobarbo-direccion-osqui-guzman.jpg", "img/obras/obra76_enobarbo-direccion-osqui-guzman.jpg"]
    },
    {
        id: "obra-33",
        titulo: "Desnudos",
        año: "2020",
        teatro: "Teatro Metropolitan",
        director: "Alejandro Maci",
        descripcion: "Una exploración sobre la intimidad, la vulnerabilidad y las relaciones humanas. La escenografía crea espacios domésticos con diferentes niveles de exposición y ocultamiento, jugando con las metáforas visuales del desnudo físico y emocional.",
        colaboradores: "Alejandro Maci",
        imagenes: ["img/obras/obra84_desnudos-direccion-alejandro-maci.jpg", "img/obras/obra85_desnudos-direccion-alejandro-maci.jpg", "img/obras/obra86_desnudos-direccion-alejandro-maci.jpg"]
    }
];
