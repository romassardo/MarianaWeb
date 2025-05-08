/**
 * Script específico para la sección de prensa de Mariana Tirantte
 * Implementa filtros de categorías para artículos de prensa
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar los filtros de categorías
    initPressFilters();
});

/**
 * Inicializa los filtros de categorías en la sección de prensa
 */
function initPressFilters() {
    const filterButtons = document.querySelectorAll('.press-filter');
    const pressItems = document.querySelectorAll('.press-item');
    
    // Asignar evento click a cada botón de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón actual
            this.classList.add('active');
            
            // Obtener categoría a filtrar
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrar los elementos según la categoría
            pressItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    // Añadir animación de entrada
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, 100);
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // Añadir animación de entrada
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, 100);
                    } else {
                        item.classList.remove('visible');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300); // Tiempo para que termine la animación
                    }
                }
            });
        });
    });
    
    // Inicialmente, mostrar todos (simular clic en "Todos")
    const allFilter = document.querySelector('.press-filter[data-filter="all"]');
    if (allFilter) {
        allFilter.click();
    }
}
