// Função para obter parâmetros da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Obter o tratamento da URL
const tratamento = getQueryParam('tratamento');
const detalhesDiv = document.getElementById('detalhes');
const video = document.getElementById('video');
const beneficios = document.getElementById('beneficios')

// Exibir detalhes com base no tratamento selecionado
let titulo = '';
let imagemSrc = '';
let descricao = '';
let video_container = '';
let beneficios_tratamento = '';

if (tratamento === 'estrias') {
    titulo = 'Tratamento para Estrias';
    imagemSrc = 'img/estrias.jpg'; // Caminho da imagem
    descricao = `<p class = "descricao">O tratamento para estrias pode envolver diversas abordagens, dependendo do tipo e da gravidade das estrias. Aqui estão algumas opções comuns:
<br><br>
Tratamentos a Laser: O Laser CO2 Fracionado é um dos métodos mais eficazes, pois estimula a produção de colá geno e melhora a textura da pele. Este tratamento é realizado em sessões e pode ajudar a reduzir a aparência das estrias.
<br><br>
Microagulhamento: Este procedimento utiliza pequenas agulhas para criar microlesões na pele, estimulando a produção de colágeno e elastina. É eficaz para estrias recentes e pode ser combinado com outros tratamentos.
<br><br>
Cremes e Óleos Hidratantes: O uso de cremes que contenham ingredientes como ácido hialurônico ou retinoides pode ajudar a melhorar a elasticidade da pele e a aparência das estrias. É importante que esses produtos sejam indicados por um dermatologista.
<br><br>
Radiofrequência: Este tratamento utiliza ondas de rádio para aquecer as camadas mais profundas da pele, promovendo a produção de colágeno e melhorando a circulação sanguínea na área afetada.
<br><br>
Peeling Químico: O uso de ácidos, como o ácido retinoico ou glicólico, pode ajudar a esfoliar a pele e estimular a regeneração celular, melhorando a aparência das estrias.
<br><br>
Plasma Rico em Plaquetas (PRP): Este tratamento envolve a injeção de plasma concentrado retirado do próprio sangue do paciente, que estimula a produção de colágeno e pode ser combinado com outros procedimentos.
<br><br>
Carboxiterapia: A aplicação de gás carbônico sob a pele ajuda a aumentar a circulação sanguínea e a oxigenação, promovendo a elasticidade da pele e reduzindo a largura das estrias.
<br><br>
Vacuoterapia: Este método utiliza um aparelho que cria um vácuo na pele, melhorando a circulação e ajudando a eliminar as estrias vermelhas.
<br><br>
Luz Intensa Pulsada: Indicado para estrias recentes, este tratamento estimula a produção de colágeno e pode ajudar a reduzir a aparência das estrias avermelhadas.
<br><br>
Intradermoterapia (Mesoterapia): Consiste na aplicação de substâncias químicas diretamente nas estrias, melhorando sua aparência e reduzindo seu tamanho.
<br><br>
Prevenção
Hidratação: Manter a pele bem hidratada é fundamental para prevenir o surgimento de novas estrias.
Alimentação: Uma dieta rica em proteínas e a ingestão adequada de água ajudam a manter a elasticidade da pele.
Evitar Ganho de Peso Rápido: Mudanças bruscas de peso podem aumentar o risco de estrias. </p>` ;

    video_container = `  <section class="artigo">
    <article>
        <h3>Dicas de cuidado com as estrias</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/zytUX7itslA?si=sGvMrHJ2xL_EGow2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        </article>
  </section>`

    beneficios_tratamento = `
  <div class = "tratamento">
 <div class="texto-tratamento">
   <p>  Os tratamentos para estrias oferecem diversos benefícios. Aqui estão quatro deles:
<br><br>
Melhora na Aparência da Pele: Os tratamentos ajudam a reduzir a visibilidade das estrias, tornando-as menos perceptíveis e melhorando a textura da pele.
<br><br>
Estimulação da Produção de colágeno: Muitos tratamentos, como microagulhamento e radiofrequência, estimulam a produção de colágeno, que é essencial para a firmeza e elasticidade da pele.
<br><br>
Hidratação e Elasticidade: O uso de cremes e óleos hidratantes melhora a hidratação da pele, aumentando sua elasticidade e prevenindo o surgimento de novas estrias.
<br><br>
Resultados Personalizados: Com a orientação de um dermatologista, é possível escolher o tratamento mais adequado para cada tipo de estria, garantindo resultados mais eficazes e satisfatórios.
</p>
</div>
<img src = "img/estrias_1.webp" alt ="" class="slide">
<img src="img/Antes-Depois-1030x580.webp" alt="" class="slide">
<img src="img/Estrías-en-hombres-1024x576.jpg" alt="" class="slide">

</div>
`
    video.innerHTML = video_container;
    beneficios.innerHTML = beneficios_tratamento


} else if (tratamento === 'limpeza') {
    titulo = 'Limpeza de Pele';
    imagemSrc = 'img/limpeza-pele.jpg'; // Caminho da imagem
    descricao = 'Informações detalhadas sobre a limpeza de pele.';
} else if (tratamento === 'butox') {
    titulo = 'Butox';
    imagemSrc = 'img/butox.jpg'; // Caminho da imagem
    descricao = 'Informações detalhadas sobre o tratamento com butox.';
} else if (tratamento === 'hidratacao') {
    titulo = 'Hidratação e Nutrição';
    imagemSrc = 'img/hidrataçãonutriçao.jpg'; // Caminho da imagem
    descricao = 'Informações detalhadas sobre hidratação e nutrição da pele.';
} else if (tratamento === 'radiofrequencia') {
    titulo = 'Radiofrequência';
    imagemSrc = 'img/radiofrequencia.jpg'; // Caminho da imagem
    descricao = 'Informações detalhadas sobre o tratamento de radiofrequência.';
} else if (tratamento === 'ozonio') {
    titulo = 'Terapia com Ozônio';
    imagemSrc = 'img/Terapia com ozônio.jpeg'; // Caminho da imagem
    descricao = 'Informações detalhadas sobre a terapia com ozônio.';
} else if (tratamento === 'ledterapia') {
    titulo = 'LedTerapia';
    imagemSrc = 'img/ledterapia.jpg'; // Caminho da imagem
    descricao = 'Informações detalhadas sobre a LedTerapia.';
} else if (tratamento === 'peeling') {
    titulo = 'Peeling Facial';
    imagemSrc = 'img/peeling-facial-clidecem-e1677678321278-846x1024.jpg'; // Caminho da imagem
    descricao = 'Informações detalhadas sobre o peeling facial.';
} else {
    titulo = 'Tratamento não encontrado';
    descricao = 'Desculpe, não conseguimos encontrar informações sobre este tratamento.';
}

// Montar o HTML para exibir os detalhes
detalhesDiv.innerHTML = `
    <h2 class="titulo">${titulo}</h2>
    <img src="${imagemSrc}" alt="${titulo}" class="imagem">
    <p class="descricao">${descricao}</p>
`;




//galeria das promoçoes e lançamentos do site
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.querySelectorAll(".slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.querySelectorAll(".slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}