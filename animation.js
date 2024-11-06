document.addEventListener("DOMContentLoaded", () => {
    // Configurações do Intersection Observer
    const observerOptions = {
        root: null, // Usar a viewport como root
        rootMargin: '0px',
        threshold: 0.1 // 10% do elemento visível para disparar a animação
    };

    // Função de callback do Intersection Observer
    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;

                // Animação do título e parágrafo de introdução
                if (target.matches('.hero-content h1, .hero-content p')) {
                    anime({
                        targets: target,
                        translateY: target.matches('.hero-content p') ? [20, 0] : [-50, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: target.matches('.hero-content p') ? 1000 : 1200,
                        delay: target.matches('.hero-content p') ? 1000 : anime.stagger(200) // Delay entre cada linha do texto
                    });
                }
                
                // Animação dos ícones sociais
                if (target.matches('.social a')) {
                    anime({
                        targets: target,
                        scale: [0, 1],
                        opacity: [0, 1],
                        easing: 'spring(1, 80, 10, 0)',
                        duration: 800,
                        delay: anime.stagger(200, { start: 1800 }) // Atrasa cada ícone
                    });
                }

                // Animação dos projetos
                if (target.matches('.projects .project')) {
                    anime({
                        targets: target,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1000,
                        delay: anime.stagger(200, { start: 2400 }) // Atrasa cada projeto
                    });
                }

                // Animação da seção "Sobre Mim"
                if (target.matches('.about-content img')) {
                    anime({
                        targets: target,
                        translateX: [-50, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1200,
                        delay: 3000 // Aparece depois dos projetos
                    });
                }
                if (target.matches('.about-content p')) {
                    anime({
                        targets: target,
                        translateX: [50, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1200,
                        delay: 3200 // Aparece um pouco depois da imagem
                    });
                }

                // Animação da seção "Contato"
                if (target.matches('.contact-section h1')) {
                    anime({
                        targets: target,
                        scale: [0.8, 1],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1000,
                        delay: 3500 // Aparece depois da seção "Sobre Mim"
                    });
                }
                if (target.matches('.contact-section .nav')) {
                    anime({
                        targets: target,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        easing: 'easeOutExpo',
                        duration: 1200,
                        delay: 3700 // Aparece depois do título "Contato"
                    });
                }

                // Marcar o elemento como animado para não repetir a animação
                target.classList.add('animated');
                observer.unobserve(target);
            }
        });
    }

    // Inicializa o Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa todos os elementos que precisam ser animados
    document.querySelectorAll('.hero-content h1, .hero-content p, .social a, .projects .project, .about-content img, .about-content p, .contact-section h1, .contact-section .nav')
        .forEach(el => observer.observe(el));
});
