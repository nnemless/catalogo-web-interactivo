function obtenerIdDestino() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

function renderizarDestino(destino) {
    const container = document.getElementById('detalle-container');

    document.title = `${destino.nombre} - Sonora Turística`;

    const galeriaHTML = destino.galeria.map((imgSrc, index) => {
        return `<img 
            src="${imgSrc}" 
            alt="Galería ${index + 1}" 
            class="${index === 0 ? 'active' : ''}" 
            data-index="${index}"
            onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1594408726726-3952df07426d?q=80&w=200&auto=format&fit=crop';"
        >`;
    }).join('');
    
    const serviciosHTML = destino.servicios.map(s => `<li>${s}</li>`).join('');

    let itinerarioHTML = '';
    if (destino.itinerario && destino.itinerario.length > 0) {
        const items = destino.itinerario.map(item => `
            <div class="timeline-item">
                <div class="timeline-time">${item.tiempo}</div>
                <div class="timeline-content">${item.actividad}</div>
            </div>
        `).join('');

        itinerarioHTML = `
            <section class="detalle-section" id="itinerario">
                <h2><i class="fa-solid fa-route"></i> Itinerario Sugerido</h2>
                <div class="timeline">
                    ${items}
                </div>
            </section>
        `;
    }

    const mapaUrl = `https://maps.google.com/maps?q=${encodeURIComponent(destino.nombre + ', Sonora')}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    const destinoHTML = `
        <main class="detalle-main">
            
            <a href="catalogo.html" class="btn-regresar">
                <i class="fa-solid fa-arrow-left"></i> Regresar al catálogo
            </a>

            <h1>${destino.nombre}</h1>
            
            <div class="detalle-tags">
                <span><i class="fa-solid fa-location-dot"></i> Región: ${destino.region}</span>
                <span><i class="fa-solid fa-tag"></i> Tema: ${destino.tema}</span>
            </div>
            
            <img 
                src="${destino.imagen}" 
                alt="Imagen principal de ${destino.nombre}" 
                class="detalle-hero-img" 
                id="mainImage"
                onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1594408726726-3952df07426d?q=80&w=800&auto=format&fit=crop';"
            >
            
            <div class="detalle-gallery" id="galleryContainer">
                ${galeriaHTML}
            </div>

            <section class="detalle-section" id="descripcion">
                <h2><i class="fa-solid fa-circle-info"></i> Descripción</h2>
                <p>${destino.descripcion_larga}</p>
            </section>

            ${itinerarioHTML}

            <section class="detalle-section" id="servicios">
                <h2><i class="fa-solid fa-list-check"></i> Servicios y Contacto</h2>
                <ul>
                    ${serviciosHTML}
                </ul>
                <p style="margin-top: 1rem;"><strong>Contacto:</strong> ${destino.contacto}</p>
            </section>
        </main>

        <aside class="detalle-sidebar">
            <section class="detalle-section" id="ubicacion">
                <h2><i class="fa-solid fa-location-dot"></i> Ubicación</h2>
                
                <div class="mapa-container">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        style="border:0;" 
                        loading="lazy" 
                        allowfullscreen
                        src="${mapaUrl}">
                    </iframe>
                </div>

            </section>

            <section class="detalle-section" id="opiniones">
                <h2><i class="fa-solid fa-comments"></i> Opiniones</h2>
                <div class="opinion-card">
                    <strong>Juan Pérez (⭐️⭐️⭐️⭐️⭐️)</strong>
                    <p>"¡Un lugar increíble! Totalmente recomendado."</p>
                </div>
                <div class="opinion-card">
                    <strong>María López (⭐️⭐️⭐️⭐️)</strong>
                    <p>"Muy bonito, aunque me gustaría que hubiera más servicios."</p>
                </div>
            </section>
        </aside>
    `;

    container.innerHTML = destinoHTML;
}

function inicializarGaleria() {
    const mainImage = document.getElementById('mainImage');
    const galleryContainer = document.getElementById('galleryContainer');

    if (!galleryContainer) return;

    const thumbnails = Array.from(galleryContainer.querySelectorAll('img'));
    let lightboxImgs = [];
    let lightboxIndex = 0;

    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Cerrar"><i class="fa-solid fa-xmark"></i></button>
        <button class="lightbox-nav lightbox-prev" aria-label="Anterior"><i class="fa-solid fa-chevron-left"></i></button>
        <img class="lightbox-img" src="" alt="Imagen ampliada">
        <button class="lightbox-nav lightbox-next" aria-label="Siguiente"><i class="fa-solid fa-chevron-right"></i></button>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('.lightbox-img');

    const abrirLightbox = (index) => {
        lightboxIndex = index;
        lightboxImg.src = thumbnails[index].src;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const cerrarLightbox = () => {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
    };

    const moverLightbox = (paso) => {
        lightboxIndex = (lightboxIndex + paso + thumbnails.length) % thumbnails.length;
        lightboxImg.src = thumbnails[lightboxIndex].src;
    };

    lightboxImgs = thumbnails.map(img => img.src);

    galleryContainer.addEventListener('click', (e) => {
        if (e.target.tagName !== 'IMG') return;

        const activeImg = galleryContainer.querySelector('img.active');
        if (activeImg) {
            activeImg.classList.remove('active');
        }

        e.target.classList.add('active');
        mainImage.src = e.target.src;

        abrirLightbox(thumbnails.indexOf(e.target));
    });

    mainImage.style.cursor = 'zoom-in';
    mainImage.addEventListener('click', () => {
        const activo = galleryContainer.querySelector('img.active');
        const idx = activo ? thumbnails.indexOf(activo) : 0;
        abrirLightbox(idx);
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
            cerrarLightbox();
        }
        if (e.target.classList.contains('lightbox-prev')) moverLightbox(-1);
        if (e.target.classList.contains('lightbox-next')) moverLightbox(1);
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') cerrarLightbox();
        if (e.key === 'ArrowLeft') moverLightbox(-1);
        if (e.key === 'ArrowRight') moverLightbox(1);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const destinoId = obtenerIdDestino();
    
    if (!destinoId) {
        document.getElementById('detalle-container').innerHTML = '<h1>Error: No se especificó un destino.</h1>';
        return;
    }
    
    const destino = mockDestinos.find(d => d.id === destinoId);

    if (destino) {
        renderizarDestino(destino);
        inicializarGaleria(); 
    } else {
        document.getElementById('detalle-container').innerHTML = '<h1>Error: Destino no encontrado.</h1>';
    }
});
