/**
 * Script principal para el sitio web de Mariana Tirantte
 * Funcionalidades: 
 * - Navegación responsiva
 * - Interacciones sutiles al pasar el cursor
 * - Galerías de imágenes con información detallada
 * - Modal con descripción completa de las obras
 */

document.addEventListener('DOMContentLoaded', function() {
    // Destacar el enlace de navegación actual
    highlightCurrentPage();
    
    // Inicializar interacciones en la galería de obras
    initGalleryInteractions();
    
    // Inicializar el modal de obras si existe en la página
    initWorkModal();
});

/**
 * Resalta el enlace de navegación de la página actual
 */
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-navigation a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        } else if (currentPath === '/' && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });
}

/**
 * Inicializa interacciones en la galería de obras
 */
function initGalleryInteractions() {
    const workItems = document.querySelectorAll('.work-item');
    
    workItems.forEach((item, index) => {
        // Asignar un ID basado en los datos si están disponibles
        if (typeof obrasData !== 'undefined') {
            if (index < obrasData.length) {
                item.setAttribute('data-id', obrasData[index].id);
            }
        }
        
        item.addEventListener('click', function(e) {
            // Solo si estamos en la página de obras
            if (window.location.pathname.includes('obras.html')) {
                e.preventDefault();
                const workId = this.getAttribute('data-id');
                openWorkDetail(workId);
            }
        });
    });
}

/**
 * Inicializa el comportamiento del modal de obras
 */
function initWorkModal() {
    const modal = document.querySelector('.work-modal');
    if (!modal) return;
    
    const closeBtn = modal.querySelector('.close-modal');
    
    // Cerrar el modal al hacer clic en el botón de cierre
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });
    
    // Cerrar el modal al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });
}

/**
 * Abre el detalle de una obra específica
 * @param {string} workId - Identificador de la obra
 */
function openWorkDetail(workId) {
    // Verificar que tengamos los datos y el modal
    if (typeof obrasData === 'undefined') {
        console.error('No se encontraron datos de obras');
        return;
    }
    
    const modal = document.querySelector('.work-modal');
    if (!modal) {
        console.error('Modal no encontrado');
        return;
    }
    
    // Encontrar la obra en los datos
    const obra = obrasData.find(o => o.id === workId);
    if (!obra) {
        console.error(`No se encontró la obra con ID: ${workId}`);
        return;
    }
    
    // Cargar los datos en el modal
    const modalTitle = modal.querySelector('.modal-title');
    const modalYear = modal.querySelector('.modal-year');
    const modalTheater = modal.querySelector('.modal-theater');
    const modalDirector = modal.querySelector('.modal-director');
    const modalDescription = modal.querySelector('.modal-description');
    const modalColaboradores = modal.querySelector('.modal-colaboradores');
    const modalImages = modal.querySelector('.modal-images');
    
    // Actualizar el contenido
    modalTitle.textContent = obra.titulo;
    modalYear.textContent = `Año: ${obra.año}`;
    modalTheater.textContent = `Teatro: ${obra.teatro}`;
    modalDirector.textContent = `Dirección: ${obra.director}`;
    modalDescription.innerHTML = `<p>${obra.descripcion}</p>`;
    modalColaboradores.textContent = `Colaboradores: ${obra.colaboradores}`;
    
    // Limpiar y cargar imágenes
    modalImages.innerHTML = '';
    obra.imagenes.forEach(imagen => {
        const img = document.createElement('img');
        img.src = imagen;
        img.alt = obra.titulo;
        modalImages.appendChild(img);
    });
    
    // Mostrar el modal
    modal.classList.add('open');
}

/**
 * Comprueba si un elemento está dentro del viewport
 * @param {HTMLElement} el - Elemento a comprobar
 * @returns {boolean} - true si está visible
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Aplica animaciones de entrada para elementos cuando entran en el viewport
 * Con retrasos escalonados para crear un efecto elegante y fluido
 */
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-reveal');
    let delay = 0;
    let lastContainer = null;
    
    elements.forEach(el => {
        // Determinar si el elemento está en un nuevo contenedor para escalonar las animaciones
        const currentContainer = el.closest('section') || el.closest('main');
        if (currentContainer !== lastContainer) {
            delay = 0;
            lastContainer = currentContainer;
        }
        
        // Solo animar elementos que están en el viewport y no han sido revelados
        if (isElementInViewport(el) && !el.classList.contains('revealed')) {
            // Aplicar un retraso escalonado basado en la posición del elemento
            setTimeout(() => {
                el.classList.add('revealed');
                
                // Para elementos que contienen imágenes, añadir una clase especial
                if (el.querySelector('img')) {
                    el.classList.add('image-revealed');
                }
                
                // Para elementos de texto, añadir una clase de texto revelado
                if (el.tagName === 'P' || el.tagName === 'H2' || el.tagName === 'H3' || 
                    el.classList.contains('bio-text') || el.classList.contains('intro-text')) {
                    el.classList.add('text-revealed');
                }
            }, delay);
            
            // Incrementar el retraso para el próximo elemento
            delay += 120;
        }
    });
    
    // Manejar animaciones para la galería de obras
    const workItems = document.querySelectorAll('.work-item');
    let workDelay = 100;
    
    workItems.forEach(item => {
        if (isElementInViewport(item) && !item.classList.contains('revealed')) {
            setTimeout(() => {
                item.classList.add('revealed');
            }, workDelay);
            workDelay += 80; // Retraso más corto para crear un efecto cascada rápido
        }
    });
}

// Asignar evento de scroll para animar elementos cuando entran al viewport
window.addEventListener('scroll', handleScrollAnimations);
