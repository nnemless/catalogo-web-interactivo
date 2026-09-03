const mockDestinos = [
    {
        id: 1,
        nombre: "Cañón de Nacapule",
        region: "playa",
        tema: "aventura",
        descripcion_corta: "Un oasis subtropical en medio del desierto, ideal para senderismo.",
        descripcion_larga: "Un oasis subtropical en medio del desierto, ideal para senderismo y tirolesa. Descubre su flora única y las pozas de agua fresca que se forman en temporada de lluvias.",
        imagen: "img/c.nacapule.jpg",
        galeria: [
            "img/c.nacapule1.jpg",
            "img/c.nacapule2.jpg",
            "img/c.nacapule3.jpg"
        ],
        contacto: "Tel: (622) 123 4567",
        servicios: ["Senderismo guiado", "Tirolesa", "Restaurante", "Zona de descanso"],
        itinerario: [
            { tiempo: "09:00 AM", actividad: "Llegada y registro en el parque" },
            { tiempo: "10:00 AM", actividad: "Senderismo guiado por el cañón" },
            { tiempo: "12:00 PM", actividad: "Aventura en tirolesa" },
            { tiempo: "02:00 PM", actividad: "Comida regional bajo las palapas" }
        ]
    },
    {
        id: 2,
        nombre: "Álamos",
        region: "sierra",
        tema: "cultura",
        descripcion_corta: "Admira la arquitectura colonial y sumérgete en la historia.",
        descripcion_larga: "Admira la arquitectura colonial y sumérgete en la historia de este Pueblo Mágico. Recorre sus calles empedradas, visita el museo local y disfruta de la tranquilidad de sus patios interiores.",
        imagen: "img/alamos.jpg",
        galeria: [
            "img/alamos1.jpg",
            "img/alamos2.jpg",
            "img/alamos3.jpg"
        ],
        contacto: "Oficina de Turismo de Álamos",
        servicios: ["Recorridos históricos", "Hoteles coloniales", "Gastronomía local", "Festivales culturales"],
        itinerario: [
            { tiempo: "09:00 AM", actividad: "Desayuno en el Mercado Municipal" },
            { tiempo: "10:30 AM", actividad: "Recorrido en el trenecito turístico" },
            { tiempo: "12:30 PM", actividad: "Visita al Museo Costumbrista" },
            { tiempo: "05:00 PM", actividad: "Atardecer desde el Mirador" }
        ]
    },
    {
        id: 3,
        nombre: "Bahía de Kino",
        region: "playa",
        tema: "gastronomia",
        descripcion_corta: "Relájate en las playas de arena y disfruta del mar.",
        descripcion_larga: "Relájate en las playas de arena y disfruta del mar en esta pintoresca bahía. Famosa por sus mariscos frescos, sus atardeceres y la cultura viva del pueblo Seri (Comca'ac).",
        imagen: "img/kino.jpg",
        galeria: [
            "img/kino1.jpg",
            "img/kino2.jpg",
            "img/kino3.jpg"
        ],
        contacto: "Restaurante El Pescador: (662) 555 1212",
        servicios: ["Restaurantes de mariscos", "Paseos en lancha", "Renta de palapas", "Artesanía Seri"],
        itinerario: [
            { tiempo: "10:00 AM", actividad: "Tiempo en la playa de arena blanca" },
            { tiempo: "01:00 PM", actividad: "Comida de mariscos (Callo de hacha)" },
            { tiempo: "03:30 PM", actividad: "Visita al Museo Étnico de los Seris" },
            { tiempo: "06:00 PM", actividad: "Paseo en lancha a Isla Tiburón" }
        ]
    },
    {
        id: 4,
        nombre: "Magdalena de Kino",
        region: "sierra",
        tema: "cultura",
        descripcion_corta: "Pueblo Mágico histórico, hogar de las misiones del Padre Kino.",
        descripcion_larga: "Recorre la historia en este Pueblo Mágico. Visita la cripta del Padre Kino, la Misión de Santa María Magdalena y disfruta de su famosa gastronomía y dulces tradicionales en la plaza monumental.",
        imagen: "img/magda.jpg",
        galeria: [
            "img/magda1.jpg",
            "img/magda2.jpg",
            "img/magda3.jpg"
        ],
        contacto: "Comité de Turismo: (632) 322 2321",
        servicios: ["Turismo religioso", "Gastronomía tradicional", "Venta de artesanías", "Hoteles boutique"],
        itinerario: [
            { tiempo: "09:00 AM", actividad: "Café y coyotas tradicionales" },
            { tiempo: "10:30 AM", actividad: "Visita a la Cripta del Padre Kino" },
            { tiempo: "12:00 PM", actividad: "Recorrido por la Misión histórica" },
            { tiempo: "02:00 PM", actividad: "Carne asada en la Plaza Monumental" }
        ]
    },
    {
        id: 5,
        nombre: "El Pinacate",
        region: "desierto",
        tema: "aventura",
        descripcion_corta: "Explora un paisaje lunar en esta Reserva de la Biósfera.",
        descripcion_larga: "Patrimonio de la Humanidad por la UNESCO. Explora un paisaje lunar en esta Reserva de la Biósfera con impresionantes cráteres volcánicos, dunas de arena y un ecosistema único.",
        imagen: "img/pina.jpg",
        galeria: [
            "img/pina1.jpg",
            "img/pina2.jpg",
            "img/pina3.jpg"
        ],
        contacto: "Oficina de Visitantes: (638) 108 0011",
        servicios: ["Senderismo", "Centro de Visitantes", "Recorridos al cráter", "Observación de estrellas"],
        itinerario: [
            { tiempo: "08:00 AM", actividad: "Registro en Centro de Visitantes Schuk Toak" },
            { tiempo: "09:30 AM", actividad: "Caminata al borde del Cráter El Elegante" },
            { tiempo: "12:00 PM", actividad: "Recorrido por senderos interpretativos" },
            { tiempo: "03:00 PM", actividad: "Visita a las dunas del Gran Desierto de Altar" }
        ]
    },
    {
        id: 6,
        nombre: "Puerto Peñasco",
        region: "playa",
        tema: "aventura",
        descripcion_corta: "Donde el desierto se une con el mar. Playas extensas y vida nocturna.",
        descripcion_larga: "Conocido como 'Rocky Point', es famoso por sus impresionantes mareas, playas de arena dorada y actividades de aventura como paseos en cuatrimoto por las dunas y pesca deportiva.",
        imagen: "img/puerto.jpg",
        galeria: [
            "img/puerto1.jpg",
            "img/puerto2.jpg",
            "img/puerto3.jpg"
        ],
        contacto: "Oficina de Convenciones y Visitantes: (638) 383 1412",
        servicios: ["Resorts de lujo", "Campos de golf", "Vida nocturna", "Paseos en barco"],
        itinerario: [
            { tiempo: "10:00 AM", actividad: "Caminata y compras en el Malecón" },
            { tiempo: "12:00 PM", actividad: "Tour en barco para avistamiento de delfines" },
            { tiempo: "03:00 PM", actividad: "Tarde de playa y alberca en el resort" },
            { tiempo: "08:00 PM", actividad: "Cena y vida nocturna en Calle 13" }
        ]
    },
    {
        id: 7,
        nombre: "San Carlos",
        region: "playa",
        tema: "aventura",
        descripcion_corta: "Hogar del espectacular Cerro Tetakawi y el mirador escénico.",
        descripcion_larga: "Un paraíso para el buceo y el snorkel. Disfruta de atardeceres inolvidables en el Mirador Escénico, catalogado como una de las mejores vistas oceánicas del mundo, y explora el Estero el Soldado.",
        imagen: "img/san.jpg",
        galeria: [
            "img/san1.jpg",
            "img/san2.jpg",
            "img/san3.jpg"
        ],
        contacto: "Turismo Guaymas-San Carlos: (622) 224 0980",
        servicios: ["Marina", "Buceo y Snorkel", "Renta de yates", "Restaurantes internacionales"],
        itinerario: [
            { tiempo: "09:00 AM", actividad: "Paseo en yate por la Marina" },
            { tiempo: "11:00 AM", actividad: "Snorkel en el acuario natural" },
            { tiempo: "02:00 PM", actividad: "Comida con vista al mar" },
            { tiempo: "05:30 PM", actividad: "Atardecer en el Mirador Escénico" }
        ]
    }
];
