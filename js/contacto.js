/**
 * Script específico para la sección de contacto de Mariana Tirantte
 * Implementa validación de formulario y feedback visual
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar validación del formulario
    initContactForm();
});

/**
 * Inicializa la validación del formulario de contacto
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    // Elementos para mostrar feedback
    const formGroups = document.querySelectorAll('.form-group');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    // Crear contenedor de mensaje de éxito
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success-message';
    successMessage.textContent = 'Mensaje enviado correctamente. Gracias por contactar con Mariana Tirantte.';
    successMessage.style.display = 'none';
    contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
    
    // Evento de envío del formulario
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Resetear estado de validación anterior
        formGroups.forEach(group => {
            group.classList.remove('has-error');
            const existingError = group.querySelector('.error-message');
            if (existingError) existingError.remove();
        });
        
        // Validar campos
        let isValid = true;
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        // Validar nombre
        if (!nameInput.value.trim()) {
            showError(nameInput, 'Por favor, introduce tu nombre');
            isValid = false;
        }
        
        // Validar email
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Por favor, introduce un email válido');
            isValid = false;
        }
        
        // Validar asunto
        if (!subjectInput.value.trim()) {
            showError(subjectInput, 'Por favor, introduce un asunto');
            isValid = false;
        }
        
        // Validar mensaje
        if (!messageInput.value.trim()) {
            showError(messageInput, 'Por favor, introduce tu mensaje');
            isValid = false;
        }
        
        // Si el formulario es válido, mostrar mensaje de éxito
        if (isValid) {
            // Simulación de envío (en producción, aquí iría la lógica de envío real)
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            setTimeout(() => {
                contactForm.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Scroll al mensaje
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1500);
        }
    });
    
    // Validación en tiempo real para el email
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('blur', function() {
        const group = this.closest('.form-group');
        const existingError = group.querySelector('.error-message');
        
        if (existingError) existingError.remove();
        group.classList.remove('has-error');
        
        if (this.value && !validateEmail(this.value)) {
            showError(this, 'Por favor, introduce un email válido');
        }
    });
}

/**
 * Muestra un mensaje de error bajo un campo
 * @param {HTMLElement} input - El campo con error
 * @param {string} message - El mensaje de error a mostrar
 */
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('has-error');
    
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    
    formGroup.appendChild(errorMessage);
}

/**
 * Valida un email con expresión regular
 * @param {string} email - El email a validar
 * @returns {boolean} - true si el email es válido
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
