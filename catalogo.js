const destinosContainer = document.getElementById('destinos-container');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

const ICONOS_TEMA = {
    aventura: 'fa-mountain-sun',
    cultura: 'fa-landmark',
    gastronomia: 'fa-utensils',
    playa: 'fa-umbrella-beach',
    naturaleza: 'fa-leaf'
};

function renderizarDestinos(destinos) {
    destinosContainer.innerHTML = '';

    if (destinos.length === 0) {
        destinosContainer.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>No se encontraron destinos que coincidan con la búsqueda.</p>
            </div>`;
        return;
    }

    destinos.forEach((destino, index) => {
        const icono = ICONOS_TEMA[destino.tema] || 'fa-tag';
        const cardHTML = `
            <div class="destino-card" style="animation-delay: ${index * 60}ms;">
                <div class="destino-card-img">
            <span class="card-badge">
                <i class="fa-solid ${icono}"></i> ${destino.tema}
            </span>
            <img
                src="${destino.imagen}"
                alt="Imagen de ${destino.nombre}"
                onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1594408726726-3952df07426d?q=80&w=600&auto=format&fit=crop';"
            >
            <button class="btn-favorito" onclick="toggleFavorito(this)">
                <i class="fa-regular fa-heart"></i>
            </button>
        </div>
        <div class="destino-card-info">
            <h2>${destino.nombre}</h2>

            <div class="card-meta">
                <span class="meta-item">
                    <i class="fa-solid fa-location-dot"></i> ${destino.region}
                </span>
                <span class="meta-item">
                    <i class="fa-solid fa-umbrella-beach"></i> ${destino.tema}
                </span>
            </div>

            <p>${destino.descripcion_corta}</p>

            <a href="detalle.html?id=${destino.id}" class="btn-ver-mas">Ver más</a>
        </div>
    </div>
        `;
        destinosContainer.innerHTML += cardHTML;
    });
}

const filtrosContainer = document.getElementById('filtros-container');
let filtroTemaActivo = 'todos';

const ETIQUETAS_TEMA = {
    aventura: 'Aventura',
    cultura: 'Cultura',
    gastronomia: 'Gastronomía',
    playa: 'Playa',
    naturaleza: 'Naturaleza'
};

function construirFiltros() {
    const temasUnicos = [...new Set(mockDestinos.map(d => d.tema))];
    const opciones = ['todos', ...temasUnicos];

    filtrosContainer.innerHTML = opciones.map(tema => {
        const esTodos = tema === 'todos';
        const label = esTodos ? 'Todos' : (ETIQUETAS_TEMA[tema] || tema);
        const icono = esTodos ? 'fa-layer-group' : (ICONOS_TEMA[tema] || 'fa-tag');
        const activo = tema === filtroTemaActivo ? ' active' : '';
        return `<button class="filter-chip${activo}" data-tema="${tema}">
                    <i class="fa-solid ${icono}"></i> ${label}
                </button>`;
    }).join('');

    filtrosContainer.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            filtroTemaActivo = chip.dataset.tema;
            filtrosContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            buscarDestinos();
        });
    });
}

function buscarDestinos() {
    const terminoBusqueda = searchInput.value.toLowerCase().trim();

    const resultados = mockDestinos.filter(destino => {
        const nombre = destino.nombre.toLowerCase();
        const region = destino.region.toLowerCase();
        const tema = destino.tema.toLowerCase();

        const coincideTexto = terminoBusqueda === '' ||
            nombre.includes(terminoBusqueda) ||
            region.includes(terminoBusqueda) ||
            tema.includes(terminoBusqueda);

        const coincideFiltro = filtroTemaActivo === 'todos' || destino.tema === filtroTemaActivo;

        return coincideTexto && coincideFiltro;
    });

    renderizarDestinos(resultados);
}

document.addEventListener('DOMContentLoaded', () => {
    construirFiltros();
    renderizarDestinos(mockDestinos);
});

searchButton.addEventListener('click', buscarDestinos);

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        buscarDestinos();
    }
});

searchInput.addEventListener('input', buscarDestinos);

window.toggleFavorito = function(btn) {
    const icon = btn.querySelector('i');
    
    if (icon.classList.contains('fa-regular')) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        btn.style.color = 'red';
    } else {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
        btn.style.color = 'white';
    }
};
