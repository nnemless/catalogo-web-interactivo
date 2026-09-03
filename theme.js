(function () {
    'use strict';

    const STORAGE_KEY = 'sts-theme';
    const root = document.documentElement;

    function temaInicial() {
        const guardado = localStorage.getItem(STORAGE_KEY);
        if (guardado) return guardado;
        const prefiereOscuro = window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefiereOscuro ? 'dark' : 'light';
    }

    function aplicarTema(tema) {
        root.setAttribute('data-theme', tema);
        const btn = document.getElementById('themeToggle');
        if (btn) {
            const esOscuro = tema === 'dark';
            btn.setAttribute('aria-pressed', String(esOscuro));
            btn.setAttribute('aria-label', esOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
            btn.querySelector('i').className = esOscuro ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    }

    aplicarTema(temaInicial());

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('#themeToggle');
        if (!btn) return;
        const nuevo = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        aplicarTema(nuevo);
        localStorage.setItem(STORAGE_KEY, nuevo);
    });

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        const onScroll = () => {
            backToTop.classList.toggle('show', window.scrollY > 480);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        onScroll();
    }
})();
