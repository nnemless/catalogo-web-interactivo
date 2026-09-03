(function () {
    'use strict';

    const ICONOS_TEMA = {
        aventura: 'fa-mountain-sun',
        cultura: 'fa-landmark',
        gastronomia: 'fa-utensils',
        playa: 'fa-umbrella-beach',
        naturaleza: 'fa-leaf'
    };

    const grid = document.getElementById('destacados-grid');
    if (grid && typeof mockDestinos !== 'undefined') {
        const destacados = mockDestinos.slice(0, 3);

        destacados.forEach((destino, index) => {
            const icono = ICONOS_TEMA[destino.tema] || 'fa-tag';
            const card = document.createElement('article');
            card.className = 'destino-card';
            card.style.animationDelay = (index * 80) + 'ms';
            card.innerHTML = `
                <div class="destino-card-img">
                    <span class="card-badge"><i class="fa-solid ${icono}"></i> ${destino.tema}</span>
                    <img src="${destino.imagen}" alt="Imagen de ${destino.nombre}"
                        onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1594408726726-3952df07426d?q=80&w=600&auto=format&fit=crop';">
                </div>
                <div class="destino-card-info">
                    <h2>${destino.nombre}</h2>
                    <div class="card-meta">
                        <span class="meta-item"><i class="fa-solid fa-location-dot"></i> ${destino.region}</span>
                        <span class="meta-item"><i class="fa-solid fa-umbrella-beach"></i> ${destino.tema}</span>
                    </div>
                    <p>${destino.descripcion_corta}</p>
                    <a href="detalle.html?id=${destino.id}" class="btn-ver-mas">Ver más</a>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    const stats = {
        destinos: mockDestinos.length,
        regiones: new Set(mockDestinos.map(d => d.region)).size,
        categorias: new Set(mockDestinos.map(d => d.tema)).size,
        servicios: mockDestinos.reduce((acc, d) => acc + d.servicios.length, 0)
    };

    const contadores = document.querySelectorAll('[data-count]');
    if (contadores.length) {
        const animar = (el) => {
            const target = parseInt(el.getAttribute('data-count'), 10);
            const duracion = 1200;
            const inicio = performance.now();
            const paso = (ahora) => {
                const progreso = Math.min((ahora - inicio) / duracion, 1);
                const suavizado = 1 - Math.pow(1 - progreso, 3);
                el.textContent = Math.round(suavizado * target);
                if (progreso < 1) requestAnimationFrame(paso);
            };
            requestAnimationFrame(paso);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animar(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        contadores.forEach(c => observer.observe(c));
    }
})();
