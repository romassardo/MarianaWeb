/**
 * Schema.org JSON-LD para perfil de artista
 * Mejora el SEO y la indexación en Google para el perfil de Mariana Tirantte
 */

document.addEventListener('DOMContentLoaded', function() {
    // Crear el Schema.org para una artista visual (escenógrafa)
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    
    // Estructura de datos JSON-LD según Schema.org para un perfil de artista
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Mariana Tirantte",
        "alternateName": "Mariana Tirante",
        "jobTitle": "Escenógrafa",
        "url": "https://www.marianatirante.com", // Actualizar cuando el dominio esté disponible
        "image": "img/perfil.svg", // Actualizar con imagen real cuando esté disponible
        "sameAs": [
            // Actualizar con los perfiles reales cuando estén disponibles
            "https://www.instagram.com/marianatirante",
            "https://www.linkedin.com/in/marianatirante",
            "https://www.behance.net/marianatirante"
        ],
        "knowsAbout": [
            "Escenografía teatral",
            "Diseño escénico",
            "Artes escénicas",
            "Teatro contemporáneo",
            "Dramaturgia del espacio"
        ],
        "hasOccupation": {
            "@type": "Occupation",
            "name": "Escenógrafa",
            "description": "Diseñadora de espacios escénicos para teatro, ópera y danza",
            "occupationLocation": {
                "@type": "Country",
                "name": "Argentina"
            },
            "skills": "Diseño escenográfico, Dramaturgia del espacio, Instalaciones artísticas, Vestuario teatral"
        },
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Escuela Superior de Bellas Artes 'Ernesto de la Cárcova'",
            "location": {
                "@type": "Place",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Buenos Aires",
                    "addressCountry": "Argentina"
                }
            }
        },
        "workLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buenos Aires",
                "addressCountry": "Argentina"
            }
        },
        "worksFor": [
            {
                "@type": "Organization",
                "name": "Grupo Marea",
                "description": "Colectivo teatral liderado por Mariano Pensotti"
            },
            {
                "@type": "Organization",
                "name": "Teatro San Martín",
                "description": "Complejo Teatral de Buenos Aires"
            }
        ],
        "awards": [
            "Reconocimiento por sus contribuciones a las artes escénicas argentinas",
            "Trayectoria destacada con más de 90 obras realizadas"
        ]
    };
    
    // Agregar datos específicos si estamos en la página de biografía
    if (window.location.pathname.includes('biografia.html')) {
        schemaData.description = "Mariana Tirantte es una escenógrafa argentina con más de dos décadas de experiencia, especializada en la creación de espacios escénicos para teatro contemporáneo. Su trabajo se caracteriza por una profunda inteligencia conceptual y una notable capacidad para materializar metáforas escénicas que trascienden la mera ilustración.";
    }
    
    // Agregar datos específicos si estamos en la página de obras
    if (window.location.pathname.includes('obras.html')) {
        schemaData.mainEntityOfPage = {
            "@type": "CollectionPage",
            "name": "Obras de Mariana Tirantte",
            "description": "Catálogo de trabajos escenográficos de Mariana Tirantte, mostrando su trayectoria en el diseño escénico para teatro contemporáneo"
        };
    }
    
    // Convertir a JSON y añadir al documento
    schemaScript.textContent = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);
});
