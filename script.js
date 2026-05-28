document.addEventListener("DOMContentLoaded", function () {
    const iconMenu = document.getElementById("iconemenu");
    const menu = document.querySelector(".menu");

    // Alterna o menu principal no mobile
    iconMenu.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Seleciona todos os itens que têm submenu
    const menuItems = document.querySelectorAll(".menu li");

    menuItems.forEach(item => {
        const submenu = item.querySelector(".submenu");
        const link = item.querySelector("a");

        if (submenu && link) {
            // Clique no link principal abre/fecha submenu
            link.addEventListener("click", function (e) {
                // Se quiser que o link navegue normalmente, remova o preventDefault
                e.preventDefault();

                // Fecha outros submenus antes de abrir o atual
                document.querySelectorAll(".submenu.active").forEach(s => {
                    if (s !== submenu) s.classList.remove("active");
                });

                submenu.classList.toggle("active");
            });

            // Links dentro do submenu funcionam normalmente (sem preventDefault)
            submenu.querySelectorAll("a").forEach(subLink => {
                subLink.addEventListener("click", function () {
                    // Aqui não bloqueamos nada, o navegador abre a página
                });
            });
        }
    });

    // Função dos cards (carrossel de fotos)
    const figuras = document.querySelectorAll('.cardfotos');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const indicadores = document.querySelectorAll('.indicadores span');
    let index = 0;

    function atualizarCarrossel() {
        figuras.forEach((figura, i) => {
            figura.classList.toggle('ativo', i === index);
        });
        indicadores.forEach((dot, i) => {
            dot.classList.toggle('ativo', i === index);
        });
    }

    next.addEventListener('click', () => {
        index = (index + 1) % figuras.length;
        atualizarCarrossel();
    });

    prev.addEventListener('click', () => {
        index = (index - 1 + figuras.length) % figuras.length;
        atualizarCarrossel();
    });

    indicadores.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            atualizarCarrossel();
        });
    });

    // Inicializa mostrando a primeira imagem
    atualizarCarrossel();
});
