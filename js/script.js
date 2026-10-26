// --- SELEÇÃO DE ELEMENTOS GLOBAIS ---
const hamburguer = document.getElementById('hamburguer');
const menuOculto = document.getElementById('menuOculto'); // Movido para cá para evitar erros
let titHeader = document.getElementById('titHeader');
let menu = document.getElementById('menu');
let titulo2 = document.getElementById('titulo2');
let body = document.getElementById('body');
let galeriaContainer = document.getElementById('galeria-container');

//gradiente (blur)
let bannerSombra = document.getElementById('bannerSombra');
//conteúdo do card (documentário)
let titDoc = document.getElementById("titDoc");
let docMeta = document.getElementById('docMeta');
let descDoc = document.getElementById('descDoc');
let btnMais = document.getElementById('btnMais');
let infoDoc = document.getElementById('infoDoc');
let idPlay = document.getElementById('idPlay');
let linkDoc = document.getElementById('linkDoc');
//section "informativo"
let informativo = document.getElementById('informativo');
let titInfo = document.getElementById('titInfo');
let textos = document.querySelectorAll('.textoInfo');
//section "cronologia" com imagens
let titCard = document.getElementById('titCard');
let carrosselContainer = document.getElementById('carrosselContainer');
//section card "Quer aprender mais?"
let card = document.getElementById('card');
let titMais = document.getElementById('titMais');
let textoMais = document.getElementById('textoMais');
let linksMais = document.querySelectorAll('#card a');
//footer
let footer = document.getElementById('footer');
let titFooter = document.getElementById('titFooter');
let textoFooter = document.getElementById('textoFooter');

// --- VARIÁVEIS DAS GALERIAS ---
const galeria = document.getElementById('galeriaSlides');
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');

let intervaloGaleria;
const tempo = 3000; // Tempo em milissegundos (3 segundos)

// variáveis da segunda galeria (cronologia)
let carrosselSlides = document.getElementById('carrosselSlides');
let btnVoltarCronologia = document.getElementById('btn-voltar-cronologia');
let btnAvancarCronologia = document.getElementById('btn-avancar-cronologia');

// --- MENU HAMBURGUER ---
hamburguer.addEventListener('click', () => {
    alterarMenu();
});

function alterarMenu(){
    const menu2 = document.getElementById('menu2');
    menuOculto.classList.toggle('ativo');
    menu2.classList.toggle('ativo');
}


// --- ALTERAR TEMA ---
const tema = document.getElementById('tema');

tema.addEventListener('click', () => {
    const imgTema = document.getElementById('img-tema');
    
    // Altera para 'tema-escuro' para bater com o seu CSS
    document.body.classList.toggle('tema-escuro');

    if (document.body.classList.contains('tema-escuro')) {
        // Altera apenas o ícone da lua/sol se necessário
        imgTema.src = 'https://images.icon-icons.com/4402/PNG/96/269419_crescent-moon-icon.png';
    } else {
        imgTema.src = 'https://images.icon-icons.com/3375/PNG/96/375494_moon_off_v1f62876e12.png';
    }
});


// --- FUNÇÕES DA PRIMEIRA GALERIA ---
function proximoSlide(){
    if (galeria.scrollLeft + galeria.clientWidth >= galeria.scrollWidth - 5){
        galeria.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        galeria.scrollBy({ left: 315, behavior: 'smooth' });
    }
}

function slideAnterior() {
    if (galeria.scrollLeft <= 0) {
        galeria.scrollTo({ left: galeria.scrollWidth, behavior: 'smooth' });
    } else {
        galeria.scrollBy({ left: -315, behavior: 'smooth' });
    }
}

function iniciarAutoplay() {
    clearInterval(intervaloGaleria);
    intervaloGaleria = setInterval(proximoSlide, tempo);
}


// --- FUNÇÕES DA SEGUNDA GALERIA (CRONOLOGIA) ---
function passarSlideCronologia(){
    if(carrosselSlides.scrollLeft + carrosselSlides.clientWidth >= carrosselSlides.scrollWidth - 5) {
        carrosselSlides.scrollTo({left: 0, behavior: 'smooth'});
    } else {
        carrosselSlides.scrollBy({ left: 355, behavior: 'smooth' });
    }
}

function voltarSlideCronologia(){
    if (carrosselSlides.scrollLeft <= 0) {
        carrosselSlides.scrollTo({ left: carrosselSlides.scrollWidth, behavior: 'smooth' });
    } else {
        carrosselSlides.scrollBy({ left: -355, behavior: 'smooth' });
    }
}

// --- EVENTOS DOS BOTÕES ---

// Primeira galeria: avança/volta e reinicia o timer de 3s para não conflitar com o clique
btnAvancar.addEventListener('click', () => {
    proximoSlide();
    iniciarAutoplay();
});

btnVoltar.addEventListener('click', () => {
    slideAnterior();
    iniciarAutoplay();
});

// Segunda galeria: apenas cliques (sem autoplay)
btnAvancarCronologia.addEventListener('click', () => {
    passarSlideCronologia();
});

btnVoltarCronologia.addEventListener('click', () => {
    voltarSlideCronologia();
});


// --- INICIALIZAÇÃO ---
// Inicia o autoplay SOMENTE na primeira galeria
iniciarAutoplay();

btnMais.addEventListener('click', (e)=>{
    e.preventDefault()
    
    let maisConteudo = document.getElementById('maisConteudo')

    maisConteudo.classList.toggle('ativo');

    // Altera o texto do botão dependendo se o conteúdo está visível ou não
    if (maisConteudo.classList.contains('ativo')) {
        btnMais.innerText = "Leia menos";
    } else {
        btnMais.innerText = "Leia mais";
    }
})