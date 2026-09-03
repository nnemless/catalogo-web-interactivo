document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        
        const btn = form.querySelector('.btn-submit');
        const textoOriginal = btn.innerHTML;
        
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.`);
            
            form.reset();

            btn.innerHTML = textoOriginal;
            btn.disabled = false;
        }, 1500);
    });
});
