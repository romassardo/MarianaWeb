/**
 * Sistema de filtrado elegante para la galería de obras de Mariana Tirantte
 * Diseño refinado y minimalista con animaciones sutiles
 */

document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.works-content')) return;
    
    // Esperar un momento para que se carguen primero las obras
    setTimeout(initializeFilters, 100);
});

/**
 * Inicializa el sistema de filtros para la galería de obras con estética refinada
 */
function initializeFilters() {
    // Crear y añadir el contenedor de filtros con animación sutil
    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'filters-container scroll-reveal';
    
    // Agregar título de filtros sutil
    const filterTitle = document.createElement('div');
    filterTitle.className = 'filter-title';
    filterTitle.innerHTML = '<span>Explorar obras</span>';
    filtersContainer.appendChild(filterTitle);
    
    // Obtener datos para los filtros mejorados
    const directors = getAllDirectors();
    const years = getAllYears();
    const types = getWorkTypes();
    const theaters = getAllTheaters();
    const periods = getAllPeriods();
    const collaborators = getAllCollaborators();
    
    // Contenedor para los grupos de filtros
    const filterGroupsWrapper = document.createElement('div');
    filterGroupsWrapper.className = 'filter-groups-wrapper';
    filtersContainer.appendChild(filterGroupsWrapper);
    
    // Añadir filtros elegantes con orden optimizado para la experiencia de usuario
    addFilterDropdown(filterGroupsWrapper, 'period', 'Período', periods);
    addFilterDropdown(filterGroupsWrapper, 'type', 'Tipo', types);
    addFilterDropdown(filterGroupsWrapper, 'director', 'Director', directors);
    addFilterDropdown(filterGroupsWrapper, 'theater', 'Teatro/Espacio', theaters);
    addFilterDropdown(filterGroupsWrapper, 'collaborator', 'Colaboradores', collaborators);
    
    // Añadir botón de reseteo con diseño minimalista
    const resetButton = document.createElement('button');
    resetButton.className = 'reset-button';
    resetButton.textContent = 'Limpiar filtros';
    resetButton.setAttribute('aria-label', 'Restablecer todos los filtros');
    resetButton.addEventListener('click', resetFilters);
    filtersContainer.appendChild(resetButton);
    
    // Insertar filtros en la página en la posición correcta
    const worksContent = document.querySelector('.works-content');
    const worksHeading = worksContent.querySelector('h2');
    const worksIntro = worksContent.querySelector('p');
    
    // Insertar después del párrafo de introducción
    if (worksIntro) {
        worksContent.insertBefore(filtersContainer, worksIntro.nextSibling);
    } else {
        // Si no hay párrafo, insertarlo después del encabezado
        worksContent.insertBefore(filtersContainer, worksHeading.nextSibling);
    }
    
    // Agregar el contador de resultados con estilo refinado
    const resultsCounter = document.createElement('div');
    resultsCounter.className = 'results-counter';
    resultsCounter.innerHTML = `<span>${obrasData.length}</span> obras en total`;
    filtersContainer.appendChild(resultsCounter);
    
    // Hacer visible con animación sutil
    setTimeout(() => {
        filtersContainer.classList.add('revealed');
    }, 100);
    
    // Iniciar con scroll suave hacia arriba
    setTimeout(() => {
        handleScrollAnimations();
    }, 150);
}

/**
 * Añade un dropdown de filtrado
 * @param {HTMLElement} container - Contenedor donde añadir el dropdown
 * @param {string} name - Nombre del filtro
 * @param {string} label - Etiqueta visible
 * @param {string[]} options - Opciones de filtrado
 */
function addFilterDropdown(container, name, label, options) {
    const filterGroup = document.createElement('div');
    filterGroup.className = 'filter-group';
    
    const filterLabel = document.createElement('label');
    filterLabel.htmlFor = `filter-${name}`;
    filterLabel.textContent = label;
    
    const filterSelect = document.createElement('select');
    filterSelect.id = `filter-${name}`;
    filterSelect.className = 'filter-select';
    
    // Opción por defecto
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = `Todos`;
    filterSelect.appendChild(defaultOption);
    
    // Añadir opciones
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.toLowerCase();
        optionElement.textContent = option;
        filterSelect.appendChild(optionElement);
    });
    
    // Evento de cambio
    filterSelect.addEventListener('change', applyFilters);
    
    filterGroup.appendChild(filterLabel);
    filterGroup.appendChild(filterSelect);
    container.appendChild(filterGroup);
}

/**
 * Obtiene todos los directores únicos de las obras
 * @returns {string[]} Lista de directores
 */
function getAllDirectors() {
    const directorsSet = new Set();
    
    obrasData.forEach(obra => {
        if (obra.director && obra.director.trim() !== '') {
            directorsSet.add(obra.director);
        }
    });
    
    return Array.from(directorsSet)
        .filter(director => director.length > 0)
        .sort();
}

/**
 * Obtiene todos los años únicos de las obras
 * @returns {string[]} Lista de años
 */
function getAllYears() {
    const yearsSet = new Set();
    
    obrasData.forEach(obra => {
        if (obra.año) {
            yearsSet.add(obra.año);
        }
    });
    
    return Array.from(yearsSet).sort((a, b) => b - a); // Ordenar de más reciente a más antiguo
}

/**
 * Obtiene periodos de tiempo para agrupar obras
 * @returns {string[]} Lista de periodos
 */
function getAllPeriods() {
    // Extraer años y ordenar
    const years = obrasData
        .map(obra => parseInt(obra.año))
        .filter(year => !isNaN(year));
    
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    const currentYear = new Date().getFullYear();
    
    // Crear periodos significativos
    const periods = [
        `${currentYear-2}-${currentYear} (Reciente)`,
        '2020-2022',
        '2015-2019',
        '2010-2014',
        '2000-2009',
        `${minYear}-1999`
    ];
    
    // Filtrar periodos que no tienen obras
    return periods.filter(period => {
        const [start, end] = period.split('-')[0].trim();
        const periodStart = parseInt(start);
        const periodEnd = parseInt(end || start);
        
        return years.some(year => year >= periodStart && year <= periodEnd);
    });
}

/**
 * Obtiene todos los teatros/espacios únicos donde se presentaron las obras
 * @returns {string[]} Lista de teatros
 */
function getAllTheaters() {
    const theatersSet = new Set();
    
    obrasData.forEach(obra => {
        if (obra.teatro && obra.teatro.trim() !== '') {
            theatersSet.add(obra.teatro);
        }
    });
    
    return Array.from(theatersSet)
        .filter(theater => theater.length > 0)
        .sort();
}

/**
 * Obtiene todos los colaboradores/colectivos principales
 * @returns {string[]} Lista de colaboradores
 */
function getAllCollaborators() {
    const collaboratorsSet = new Set();
    
    obrasData.forEach(obra => {
        if (obra.colaboradores) {
            // Extraer principales colaboradores
            if (obra.colaboradores.includes('Grupo Marea')) {
                collaboratorsSet.add('Grupo Marea');
            }
            if (obra.colaboradores.includes('Teatro Colón')) {
                collaboratorsSet.add('Teatro Colón');
            }
            if (obra.colaboradores.includes('Complejo Teatral de Buenos Aires')) {
                collaboratorsSet.add('Complejo Teatral de Buenos Aires');
            }
            // Detectar más patrones
            if (obra.colaboradores.includes('Festival')) {
                collaboratorsSet.add('Festivales Internacionales');
            }
        }
    });
    
    return Array.from(collaboratorsSet).sort();
}

/**
 * Obtiene los tipos de obra basados en títulos y descripciones
 * @returns {string[]} Lista de tipos
 */
function getWorkTypes() {
    // Categorías principales para crear una mejor experiencia de filtrado
    const types = [
        'Teatro',
        'Ópera',
        'Instalación',
        'Danza',
        'Performance', 
        'Intervención espacial'
    ];
    
    return types;
}

/**
/**
 * Aplica los filtros seleccionados a la galería
 */
function applyFilters() {
    // Obtener todos los valores de filtros
    const directorFilter = document.getElementById('filter-director')?.value.toLowerCase() || '';
    const yearFilter = document.getElementById('filter-year')?.value || '';
    const typeFilter = document.getElementById('filter-type')?.value.toLowerCase() || '';
    const theaterFilter = document.getElementById('filter-theater')?.value.toLowerCase() || '';
    const periodFilter = document.getElementById('filter-period')?.value || '';
    const collaboratorFilter = document.getElementById('filter-collaborator')?.value.toLowerCase() || '';
    
    const workItems = document.querySelectorAll('.work-item');
    let visibleCount = 0;
    
    // Marcar los filtros activos visualmente
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.classList.toggle('active-filter', select.value !== '');
    });
    
    // Mostrar u ocultar el botón de reiniciar
    const resetButton = document.querySelector('.reset-button');
    const hasActiveFilters = Array.from(filterSelects).some(select => select.value !== '');
    resetButton.classList.toggle('active', hasActiveFilters);
    
    // Aplicar animación sutil a los resultados
    const resultsCounter = document.querySelector('.results-counter');
    if (hasActiveFilters) {
        resultsCounter.classList.add('updated');
    } else {
        resultsCounter.classList.remove('updated');
    }
    
    workItems.forEach((item, index) => {
        if (index >= obrasData.length) return;
        
        const obra = obrasData[index];
        let shouldShow = true;
        
        // Aplicar filtro de director
        if (directorFilter && obra.director) {
            if (!obra.director.toLowerCase().includes(directorFilter)) {
                shouldShow = false;
            }
        }
        
        // Aplicar filtro de año específico
        if (yearFilter && obra.año !== yearFilter) {
            shouldShow = false;
        }
        
        // Aplicar filtro de teatro/espacio
        if (theaterFilter && obra.teatro) {
            if (!obra.teatro.toLowerCase().includes(theaterFilter)) {
                shouldShow = false;
            }
        }
        
        // Aplicar filtro de periodo
        if (periodFilter) {
            const year = parseInt(obra.año);
            if (!isNaN(year)) {
                const periodParts = periodFilter.split('-');
                const startYear = parseInt(periodParts[0]);
                
                // Extraer el año final (puede tener texto adicional en paréntesis)
                let endYearText = periodParts[1];
                if (endYearText && endYearText.includes('(')) {
                    endYearText = endYearText.split('(')[0].trim();
                }
                
                const endYear = parseInt(endYearText || startYear);
                
                if (year < startYear || year > endYear) {
                    shouldShow = false;
                }
            }
        }
        
        // Aplicar filtro de tipo
        if (typeFilter) {
            let matchesType = false;
            
            // Lógica mejorada para detectar tipos de obras
            switch (typeFilter) {
                case 'instalación':
                    matchesType = obra.titulo.toLowerCase().includes('instalación') || 
                                  obra.descripcion.toLowerCase().includes('instalación');
                    break;
                    
                case 'ópera':
                    matchesType = obra.titulo.toLowerCase().includes('ópera') || 
                                  (obra.teatro && obra.teatro.toLowerCase().includes('colón')) ||
                                  (obra.descripcion && obra.descripcion.toLowerCase().includes('ópera'));
                    break;
                    
                case 'danza':
                    matchesType = obra.descripcion && (
                                  obra.descripcion.toLowerCase().includes('danza') ||
                                  obra.descripcion.toLowerCase().includes('coreograf') ||
                                  obra.descripcion.toLowerCase().includes('corporal'));
                    break;
                    
                case 'performance':
                    matchesType = obra.descripcion && (
                                  obra.descripcion.toLowerCase().includes('performance') ||
                                  obra.descripcion.toLowerCase().includes('performá'));
                    break;
                    
                case 'intervención espacial':
                    matchesType = obra.descripcion && (
                                  obra.descripcion.toLowerCase().includes('intervención') ||
                                  obra.descripcion.toLowerCase().includes('espacial') ||
                                  obra.descripcion.toLowerCase().includes('sitio específico'));
                    break;
                    
                default: // Teatro y otros
                    matchesType = (
                        (obra.titulo && obra.titulo.toLowerCase().includes(typeFilter)) ||
                        (obra.descripcion && obra.descripcion.toLowerCase().includes(typeFilter))
                    );
            }
            
            if (!matchesType) {
                shouldShow = false;
            }
        }
        
        // Aplicar filtro de colaboradores
        if (collaboratorFilter && obra.colaboradores) {
            if (!obra.colaboradores.toLowerCase().includes(collaboratorFilter)) {
                shouldShow = false;
            }
        }
        
        // Aplicar o quitar clase de ocultamiento con transición
        if (shouldShow) {
            item.classList.remove('hidden');
            // Añadir delay escalonado para una transición más elegante
            setTimeout(() => {
                item.classList.add('visible');
            }, visibleCount * 30);
            visibleCount++;
        } else {
            item.classList.remove('visible');
            item.classList.add('hidden');
        }
    });
    
    // Actualizar contador de resultados
    resultsCounter.innerHTML = `<span>${visibleCount}</span> ${visibleCount === 1 ? 'obra' : 'obras'} encontrada${visibleCount === 1 ? '' : 's'}`;
    
    // Mostrar mensaje si no hay resultados
    let noResultsMessage = document.querySelector('.no-results-message');
    
    if (visibleCount === 0) {
        if (!noResultsMessage) {
            noResultsMessage = document.createElement('div');
            noResultsMessage.className = 'no-results-message';
            noResultsMessage.textContent = 'No se encontraron obras con los filtros seleccionados';
            document.querySelector('.works-grid').appendChild(noResultsMessage);
        }
        noResultsMessage.style.display = 'block';
        // Añadir animación sutil al mensaje
        setTimeout(() => {
            noResultsMessage.classList.add('visible');
        }, 100);
    } else if (noResultsMessage) {
        noResultsMessage.classList.remove('visible');
        setTimeout(() => {
            noResultsMessage.style.display = 'none';
        }, 300);
    }
    
    // Actualizar layout para mejor visualización
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 300);
}

/**
 * Resetea todos los filtros con animación sutil
 */
function resetFilters() {
    // Resetear valores de los selectores
    const directorSelect = document.getElementById('filter-director');
    const yearSelect = document.getElementById('filter-year');
    const typeSelect = document.getElementById('filter-type');
    
    directorSelect.value = '';
    yearSelect.value = '';
    typeSelect.value = '';
    
    // Quitar clases de filtro activo
    directorSelect.classList.remove('active-filter');
    yearSelect.classList.remove('active-filter');
    typeSelect.classList.remove('active-filter');
    
    // Ocultar botón de reseteo
    const resetButton = document.querySelector('.reset-button');
    resetButton.classList.remove('active');
    
    // Restaurar visibilidad de las obras con animación
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.style.display = 'block';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 10);
    });
    
    // Actualizar contador de resultados con estilo elegante
    const resultsCounter = document.querySelector('.results-counter');
    resultsCounter.innerHTML = `<span>${obrasData.length}</span> obras en total`;
    
    // Agregar clase para animación sutil
    resultsCounter.classList.add('updated');
/**
 * Aplica los filtros seleccionados a la galería
 */
function applyFilters() {
    // Obtener todos los valores de filtros
    const directorFilter = document.getElementById('filter-director')?.value.toLowerCase() || '';
    const yearFilter = document.getElementById('filter-year')?.value || '';
    const typeFilter = document.getElementById('filter-type')?.value.toLowerCase() || '';
    const theaterFilter = document.getElementById('filter-theater')?.value.toLowerCase() || '';
    const periodFilter = document.getElementById('filter-period')?.value || '';
    const collaboratorFilter = document.getElementById('filter-collaborator')?.value.toLowerCase() || '';
    
    const workItems = document.querySelectorAll('.work-item');
    let visibleCount = 0;
    
    // Marcar los filtros activos visualmente
    const filterSelects = document.querySelectorAll('.filter-select');
    filterSelects.forEach(select => {
        select.classList.toggle('active-filter', select.value !== '');
    });
    
    // Mostrar u ocultar el botón de reiniciar
    const resetButton = document.querySelector('.reset-button');
    const hasActiveFilters = Array.from(filterSelects).some(select => select.value !== '');
    resetButton.classList.toggle('active', hasActiveFilters);
    
    // Aplicar animación sutil a los resultados
    const resultsCounter = document.querySelector('.results-counter');
    if (hasActiveFilters) {
        resultsCounter.classList.add('updated');
    } else {
        resultsCounter.classList.remove('updated');
    }
    
    workItems.forEach((item, index) => {
        if (index >= obrasData.length) return;
        
        const obra = obrasData[index];
        let shouldShow = true;
        
        // Aplicar filtro de director
        if (directorFilter && obra.director) {
            if (!obra.director.toLowerCase().includes(directorFilter)) {
                shouldShow = false;
            }
        }
        
        // Aplicar filtro de año específico
        if (yearFilter && obra.año !== yearFilter) {
            shouldShow = false;
        }
        
        // Aplicar filtro de teatro/espacio
        if (theaterFilter && obra.teatro) {
            if (!obra.teatro.toLowerCase().includes(theaterFilter)) {
                shouldShow = false;
            }
        }
        
        // Aplicar filtro de periodo
        if (periodFilter) {
            const year = parseInt(obra.año);
            if (!isNaN(year)) {
                const periodParts = periodFilter.split('-');
                const startYear = parseInt(periodParts[0]);
                
                // Extraer el año final (puede tener texto adicional en paréntesis)
                let endYearText = periodParts[1];
                if (endYearText && endYearText.includes('(')) {
                    endYearText = endYearText.split('(')[0].trim();
                }
                
                const endYear = parseInt(endYearText || startYear);
                
                if (year < startYear || year > endYear) {
                    shouldShow = false;
                }
            }
        }
        
        // Aplicar filtro de tipo
        if (typeFilter) {
            let matchesType = false;
            
            // Lógica mejorada para detectar tipos de obras
            switch (typeFilter) {
                case 'instalación':
                    matchesType = obra.titulo.toLowerCase().includes('instalación') || 
                                  obra.descripcion.toLowerCase().includes('instalación');
                    break;
                    
                case 'ópera':
                    matchesType = obra.titulo.toLowerCase().includes('ópera') || 
                                  (obra.teatro && obra.teatro.toLowerCase().includes('colón')) ||
                                  (obra.descripcion && obra.descripcion.toLowerCase().includes('ópera'));
                    break;
                    
                case 'danza':
                    matchesType = obra.descripcion && (
                                  obra.descripcion.toLowerCase().includes('danza') ||
                                  obra.descripcion.toLowerCase().includes('coreograf') ||
                                  obra.descripcion.toLowerCase().includes('corporal'));
                    break;
                    
                case 'performance':
                    matchesType = obra.descripcion && (
                                  obra.descripcion.toLowerCase().includes('performance') ||
                                  obra.descripcion.toLowerCase().includes('performá'));
                    break;
                    
                case 'intervención espacial':
                    matchesType = obra.descripcion && (
                                  obra.descripcion.toLowerCase().includes('intervención') ||
                                  obra.descripcion.toLowerCase().includes('espacial') ||
                                  obra.descripcion.toLowerCase().includes('sitio específico'));
                    break;
                    
                default: // Teatro y otros
                    matchesType = (
                        (obra.titulo && obra.titulo.toLowerCase().includes(typeFilter)) ||
                        (obra.descripcion && obra.descripcion.toLowerCase().includes(typeFilter))
                    );
            }
            
            if (!matchesType) {
                shouldShow = false;
            }
        }
        
        // Aplicar filtro de colaboradores
        if (collaboratorFilter && obra.colaboradores) {
            if (!obra.colaboradores.toLowerCase().includes(collaboratorFilter)) {
                shouldShow = false;
            }
        }
        
        // Aplicar o quitar clase de ocultamiento con transición
        if (shouldShow) {
            item.classList.remove('hidden');
            // Añadir delay escalonado para una transición más elegante
            setTimeout(() => {
                item.classList.add('visible');
            }, visibleCount * 30);
            visibleCount++;
        } else {
            item.classList.remove('visible');
            item.classList.add('hidden');
        }
    });
    
    // Actualizar contador de resultados
    resultsCounter.innerHTML = `<span>${visibleCount}</span> ${visibleCount === 1 ? 'obra' : 'obras'} encontrada${visibleCount === 1 ? '' : 's'}`;
    
    // Mostrar mensaje si no hay resultados
    let noResultsMessage = document.querySelector('.no-results-message');
    
    if (visibleCount === 0) {
        if (!noResultsMessage) {
            noResultsMessage = document.createElement('div');
            noResultsMessage.className = 'no-results-message';
            noResultsMessage.textContent = 'No se encontraron obras con los filtros seleccionados';
            document.querySelector('.works-grid').appendChild(noResultsMessage);
        }
        noResultsMessage.style.display = 'block';
        // Añadir animación sutil al mensaje
        setTimeout(() => {
            noResultsMessage.classList.add('visible');
        }, 100);
    } else if (noResultsMessage) {
        noResultsMessage.classList.remove('visible');
        setTimeout(() => {
            noResultsMessage.style.display = 'none';
        }, 300);
    }
    
    // Actualizar layout para mejor visualización
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 300);
}
