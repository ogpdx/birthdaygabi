function mostrarMensagem() {
    const elementos = {
        mensagem: document.getElementById('mensagem'),
        botao: document.querySelector('button'),
        decoracoes: document.querySelectorAll('.decoracao'),
        audio: document.getElementById('musicaFundo') // elemento <audio>
    };

    //musica de fundo
    if (elementos.audio) {
        elementos.audio.currentTime = 58; // Inicia a música aos 2 minutos
        elementos.audio.volume = 0.3; // volume reduzido
        elementos.audio.play().catch(err => {
            console.log("Autoplay bloqueado ou falha ao reproduzir:", err);
        });
    }

    // Mostrar mensagem
    elementos.mensagem.style.display = 'block';
    elementos.mensagem.style.opacity = '1';

    // Esconder botão
    elementos.botao.style.display = 'none';

    // Mostrar decorações com efeito
    elementos.decoracoes.forEach((decor, index) => {
        setTimeout(() => {
            decor.style.display = 'block';
            decor.style.opacity = '1';
            decor.style.animation = 'aparecer 0.5s ease forwards';
        }, 300 + (index * 100));
    });

    // Fade-in da mensagem
    let opacidade = 0;
    const fadeIn = () => {
        if (opacidade < 1) {
            opacidade += 0.1;
            elementos.mensagem.style.opacity = opacidade;
            requestAnimationFrame(fadeIn);
        }
    };
    requestAnimationFrame(fadeIn);
}
