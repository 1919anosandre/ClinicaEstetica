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
    descricao = `<p class ='descricao'> A limpeza de pele é um procedimento estético que visa remover impurezas, células mortas, cravos e outras obstruções dos poros, promovendo uma pele mais saudável e revitalizada. Esse tratamento pode ser realizado em clínicas de estética ou em casa (de forma mais simples), mas a versão profissional oferece resultados mais profundos e seguros. Abaixo está uma explicação do processo típico em uma clínica:
<br><br>
Passo a Passo de uma Limpeza de Pele Profissional
Higienização:
<br><br>
Limpeza inicial com produtos específicos para remover maquiagem, sujeira e oleosidade superficial da pele.
Esfoliação:
<br><br>
Aplicação de um esfoliante para remover células mortas e ajudar a desobstruir os poros.
Vaporização (opcional):
<br><br>
Uso de vapor para dilatar os poros, facilitando a extração de cravos e outras impurezas.
Extração:
<br><br>
Remoção manual ou com instrumentos adequados para extrair cravos e espinhas sem causar danos à pele.
Máscara Calmante:
<br><br>
Aplicação de uma máscara específica para acalmar a pele, reduzir a vermelhidão e hidratar.
Finalização:
<br><br>
Uso de produtos como tônicos, hidratantes e protetor solar para equilibrar e proteger a pele.
    </p>`;


    video_container = `  <section class="artigo">
    <article>
        <h3>Dicas de cuidado com a pele</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/mZuoxqKV_Zc?si=BZNPLjTBrJ_M3WUT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  </section>`

    beneficios_tratamento = `
  <div class = "tratamento">
 <div class="texto-tratamento">
   <p>
   Benefícios do Tratamento
   <br><br>
Redução de cravos e espinhas.
   <br><br>
Melhoria na textura e aparência da pele.
   <br><br>
Controle da oleosidade.
   <br><br>
Prevenção de problemas dermatológicos.
</p>
</div>
<img src="img/limpeza-de-pele-antes-e-depois.jpg" alt="" class= 'slide'>
<img src="img/Limpeza-De-Pele-Profunda-2-1.jpg" alt="" class= 'slide'>
<img src="img/resenha Creme de limpeza e Hidratante Mary Kay.jpg" alt="" class= 'slide'>

</div>
`
    video.innerHTML = video_container;
    beneficios.innerHTML = beneficios_tratamento

} else if (tratamento === 'butox') {
    titulo = 'Butox';
    imagemSrc = 'img/butox.jpg'; // Caminho da imagem
    descricao = `<p class ='descricao'>O tratamento com toxina botulínica, popularmente conhecido como Botox, é um procedimento estético ou terapêutico que utiliza a toxina produzida pela bactéria Clostridium botulinum para relaxar músculos específicos. Esse efeito ocorre porque a toxina bloqueia temporariamente a liberação de acetilcolina, substância responsável por transmitir sinais nervosos aos músculos, impedindo que eles se contraiam.

Usos do Botox
Estéticos:
<br><br>
Redução de rugas dinâmicas, como:
Linhas de expressão na testa.
<br><br>
"Pés de galinha" ao redor dos olhos.
<br><br>
Rugas entre as sobrancelhas (glabela).
<br><br>
Levantamento de sobrancelhas.
<br><br>
Diminuição de marcas de expressão ao sorrir.
<br><br>
Terapêuticos:
<br><br>
Bruxismo (aperto ou ranger dos dentes).
<br><br>
Enxaquecas crônicas.
<br><br>
Hiperidrose (suor excessivo nas axilas, mãos ou pés).
<br><br>
Estrabismo (alinhamento dos olhos).
<br><br>
Espasticidade muscular (rigidez em casos de paralisia cerebral, AVC ou lesões medulares).
<br><br>
Como funciona o procedimento
Avaliação:
<br><br>
O médico avalia a área a ser tratada e verifica se o paciente é um bom candidato.
<br><br>
Aplicação:
<br><br>
É feita com agulhas muito finas diretamente nos músculos específicos.
O procedimento dura de 10 a 20 minutos e, geralmente, é bem tolerado.
Pós-procedimento:
Não exige tempo de recuperação prolongado.
Recomenda-se evitar deitar, massagear o local ou fazer exercícios intensos por algumas horas.    </p>`;


    video_container = `  <section class="artigo">
<article>
    <h3>Dicas do butox</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/h-KiTPapEDM?si=8JYv_D7X1OgBlTCD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    beneficios_tratamento = `
<div class = "tratamento">
<div class="texto-tratamento">
<p>
Começam a aparecer em cerca de 2 a 7 dias após a aplicação.
Duram, em média, 3 a 6 meses, dependendo do metabolismo do paciente e da área tratada.
Riscos e contraindicações
Embora seja seguro, alguns efeitos colaterais podem incluir:
<br><br>
Pequenos hematomas ou inchaços no local da aplicação.
Dor de cabeça leve nos primeiros dias.
Ptose palpebral (queda temporária da pálpebra, em casos raros).
Contraindicado para:
<br><br>
Gestantes e lactantes.
Pessoas com alergia à toxina botulínica.
Pacientes com doenças neuromusculares, como miastenia grave.
</p>
</div>
    <img src="img/antes-e-depois-botox-800x590.jpg" alt="" class= 'slide'>
        <img src="img/botox-cosmetic-89-view-1-detail.jpg" alt="" class= 'slide'>
        <img src="img/Botox-antes-e-depois.webp" alt="" class= 'slide'>

</div>
`
    video.innerHTML = video_container;
    beneficios.innerHTML = beneficios_tratamento


} else if (tratamento === 'hidratacao') {
    titulo = 'Hidratação e Nutrição';
    imagemSrc = 'img/hidrataçãonutriçao.jpg'; // Caminho da imagem
    descricao = `<p class ='descricao'>
        A hidratação e a nutrição são fundamentais para a saúde da pele e do corpo, especialmente para as mulheres, que podem ter necessidades específicas devido a fatores hormonais, menstruais, gravidez, amamentação e outros aspectos. Vamos entender como esses dois processos funcionam e como eles impactam a saúde feminina.
<br><br>
Hidratação
A hidratação envolve o consumo adequado de líquidos para manter o equilíbrio hídrico do corpo, essencial para o funcionamento das células, tecidos e órgãos. Para as mulheres, a hidratação afeta diretamente:
<br><br>
Pele: A água mantém a pele suave, elástica e com aparência saudável, prevenindo ressecamento, flacidez e rugas.
Sistema digestivo: Hidratar-se corretamente facilita a digestão e previne problemas como constipação.
Função renal: A ingestão de líquidos ajuda a filtrar toxinas e manter os rins funcionando de maneira eficiente.
Cabelo: A hidratação também influencia a saúde do cabelo, ajudando a mantê-lo hidratado e menos propenso a ressecar.
A recomendação geral de ingestão de líquidos é cerca de 2 a 2,5 litros por dia, mas esse valor pode variar de acordo com fatores como atividade física, clima, gravidez, e amamentação.
<br><br>
Nutrição
A nutrição envolve o fornecimento de nutrientes essenciais para o funcionamento do corpo. Para as mulheres, uma dieta equilibrada impacta diretamente o bem-estar geral, a saúde reprodutiva e o controle hormonal. Aqui estão os nutrientes mais importantes:
<br><br>
Proteínas: Essenciais para o crescimento e reparo celular, além de manter a saúde muscular. Fontes boas incluem carnes magras, ovos, leguminosas (feijão, lentilhas), tofu e nozes.
<br><br>
Carboidratos complexos: Fonte primária de energia, os carboidratos complexos ajudam a manter níveis estáveis de glicose no sangue. Fontes incluem arroz integral, batata-doce, quinoa e grãos integrais.
<br><br>
Gorduras saudáveis: Gorduras boas, como ômega-3 e ômega-6, são importantes para a saúde cardiovascular, cerebral e hormonal. Fontes incluem peixes como salmão, abacate, azeite de oliva e nozes.
<br><br>
Vitaminas e minerais:
<br><br>
Vitamina D: Fundamental para a absorção de cálcio e a saúde óssea, especialmente importante para as mulheres após a menopausa.
Cálcio: Essencial para a saúde óssea e prevenção da osteoporose.
Ferro: As mulheres têm maior risco de deficiência de ferro devido à perda de sangue durante a menstruação. Fontes incluem carnes vermelhas magras, feijão, lentilhas e vegetais de folhas escuras.
Ácido fólico (vitamina B9): Importante para a saúde reprodutiva, especialmente antes e durante a gravidez. Fontes incluem vegetais folhosos, legumes e frutas cítricas.
Antioxidantes: As vitaminas C e E ajudam a combater os radicais livres e a prevenir o envelhecimento precoce, além de manter a saúde da pele. Fontes incluem frutas cítricas, berries (frutas vermelhas), nozes e vegetais coloridos.
    
    </p>`;



    video_container = `  <section class="artigo">
<article>
    <h3>Dicas de hidratação</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/pWRroGV91_s?si=5dg-L1b3d9gAeRgH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    beneficios_tratamento = `
<div class = "tratamento">
<div class="texto-tratamento">
<p>
Dicas para Hidratação e Nutrição Saudáveis para Mulheres:
<br><br>
Beba água ao longo do dia para manter a hidratação constante. Adicionar infusões de frutas ou ervas também pode ser uma alternativa saborosa.
Inclua alimentos frescos e naturais em sua dieta, com ênfase em vegetais, frutas, proteínas magras e carboidratos integrais.
Evite alimentos ultraprocessados que podem desidratar e oferecer poucos nutrientes.
<br><br>
Coma refeições balanceadas para garantir que seu corpo receba todos os nutrientes necessários para funcionar adequadamente.
Adapte sua alimentação de acordo com suas fases de vida e necessidades específicas, como menstruando, grávida ou na menopausa.
A hidratação e nutrição adequadas são essenciais para o bem-estar físico e mental, e um acompanhamento com um nutricionista pode ser fundamental para personalizar uma dieta que atenda às necessidades de cada mulher.
</p>
</div>
        <img src="img/hidrataçao-antes-depois.jpg" alt="" class= 'slide'>
        <img src="img/hidrataçao-antes-depois2.jpg" alt="" class= 'slide'>
        <img src="img/Antes e depois 01hidrataçao.png" alt="" class= 'slide'>

</div>
`
    video.innerHTML = video_container;
    beneficios.innerHTML = beneficios_tratamento

} else if (tratamento === 'radiofrequencia') {
    titulo = 'Radiofrequência';
    imagemSrc = 'img/radiofrequencia.jpg'; // Caminho da imagem
    descricao = `<p class ='descricao'> A radiofrequência é um tratamento estético ou terapêutico que utiliza ondas eletromagnéticas para aquecer as camadas mais profundas da pele e tecidos subjacentes. Esse aquecimento controlado estimula a produção de colágeno e elastina, melhora a circulação sanguínea e promove efeitos rejuvenescedores ou terapêuticos. É um procedimento não invasivo, amplamente utilizado para tratar sinais de envelhecimento, flacidez, celulite e gordura localizada.
<br><br>
Como funciona?
Emissão de ondas eletromagnéticas:
<br><br>
O equipamento de radiofrequência emite ondas de calor que penetram na pele, aquecendo as camadas mais profundas sem danificar a superfície.
A temperatura atinge entre 38ºC e 42ºC, o suficiente para estimular a regeneração celular.
Estimulação de colágeno e elastina:
<br><br>
O calor aquece as fibras de colágeno existentes, causando sua contração imediata, o que resulta em um efeito tensor na pele.
A longo prazo, o tratamento estimula a produção de novas fibras, melhorando a firmeza e a elasticidade.
Aumento da circulação sanguínea e linfática:
<br><br>
O aquecimento também melhora a circulação, ajudando a eliminar toxinas e promovendo a oxigenação dos tecidos.
Indicações do tratamento
Estéticos:
<br><br>
Rugas e linhas de expressão: Reduz marcas finas e melhora a textura da pele.
Flacidez facial e corporal: Ajuda a tonificar a pele em áreas como rosto, pescoço, braços, abdômen e coxas.
Celulite: Reduz a aparência da celulite, pois estimula o tecido e melhora a circulação local.
Gordura localizada: Promove a quebra de células adiposas em áreas específicas.
Estrias: Pode melhorar a textura e aparência das estrias ao estimular o colágeno.
Terapêuticos:
<br><br>
Tratamento de dores musculares e articulares.
Melhora da circulação em casos de má circulação sanguínea.
Como é o procedimento?
Avaliação inicial:
O profissional avalia a área a ser tratada e verifica se o paciente é elegível.
Aplicação do gel condutor:
Um gel é aplicado para proteger a pele e facilitar o deslizamento do aparelho.
Uso do equipamento:
O aplicador de radiofrequência é movimentado na área tratada.
Sessão:
Cada sessão dura entre 20 a 60 minutos, dependendo da área.
Intervalo entre sessões:
Geralmente, são recomendadas de 6 a 10 sessões, com intervalos de 7 a 15 dias.   </p>`;


    video_container = `  <section class="artigo">
<article>
    <h3>radiofrequencia</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/VqwWCgoORik?si=jI45-mijGSBaNeuP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    beneficios_tratamento = `
<div class = "tratamento">
<div class="texto-tratamento">
<p>
Resultados
Os efeitos imediatos incluem uma pele mais firme e tonificada devido à contração das fibras de colágeno.
Os resultados definitivos aparecem ao longo de semanas ou meses, à medida que o corpo produz novo colágeno.
A manutenção pode ser necessária após o tratamento inicial.
</p>
</div>
      <img src="img/antes-depois-radiofrequencia3.jpg" alt="" class= 'slide'>
        <img src="img/antesdepois.rosto_1radiofrequencia.jpg" alt="" class= 'slide'>
        <img src="img/as-imagens-antes-e-depois-comprovam-o-excelentes-resultados-da-Radiofrecuencia-facial.jpg" alt="" class= 'slide'>
</div>
`
    video.innerHTML = video_container;
    beneficios.innerHTML = beneficios_tratamento
} else if (tratamento === 'ozonio') {
    titulo = 'Terapia com Ozônio';
    imagemSrc = 'img/Terapia com ozônio.jpeg'; // Caminho da imagem
    descricao = `<p class ='descricao'> O tratamento com ozônio, ou ozonioterapia, utiliza uma mistura de oxigênio e ozônio medicinal para fins terapêuticos. Esse gás, composto por três átomos de oxigênio (O₃), possui propriedades antimicrobianas, anti-inflamatórias e imunomoduladoras, tornando-se útil em diversos tratamentos médicos e estéticos.
<br><br>
Como funciona?
O ozônio é aplicado no organismo em concentrações terapêuticas, promovendo benefícios como:
<br><br>
Ação antimicrobiana: Combate bactérias, vírus e fungos, tornando-o eficaz no tratamento de infecções.
Melhora da oxigenação dos tecidos: Aumenta a oferta de oxigênio para as células, estimulando a regeneração tecidual.
Efeito anti-inflamatório: Reduz inflamações, sendo útil em condições como artrite e doenças autoimunes.
Ação antioxidante: Em pequenas doses, regula o equilíbrio de radicais livres, protegendo células saudáveis.
Formas de aplicação
O ozônio pode ser administrado de várias maneiras, dependendo da condição a ser tratada:
<br><br>
Auto-hemoterapia maior:
<br><br>
O sangue do paciente é coletado, misturado com ozônio e reintroduzido no corpo.
Indicada para doenças autoimunes, inflamações e infecções sistêmicas.
Injeção local:
<br><br>
O ozônio é injetado diretamente em músculos, articulações ou áreas específicas.
Usado para tratar dores musculoesqueléticas, como artrose e hérnia de disco.
Insuflação retal ou vaginal:
<br><br>
A mistura de ozônio é introduzida por essas vias para tratar doenças gastrointestinais, infecções ou problemas ginecológicos.
Tópico:
<br><br>
Aplicação de óleos ozonizados ou água ozonizada em feridas, úlceras ou problemas de pele.
Ajuda na cicatrização e combate infecções.
Estético:
<br><br>
Usado para estimular a produção de colágeno, tratar acne, flacidez e celulite.
Indicações
A ozonioterapia é utilizada em diversas áreas:
<br><br>
Medicina geral:
<br><br>
Infecções bacterianas, virais e fúngicas.
Feridas crônicas, como as causadas por diabetes.
Doenças autoimunes, como lúpus e artrite reumatoide.
Doenças respiratórias (asma, bronquite).
Medicina esportiva:
<br><br>
Alívio de dores musculares e melhora na recuperação após lesões.
Estética:
<br><br>
Melhora da qualidade da pele, redução de celulite e flacidez.
Odontologia:
<br><br>
Tratamento de infecções bucais e cicatrização pós-cirúrgica.
Gastroenterologia:
<br><br>
Tratamento de colite, síndrome do intestino irritável e outras inflamações intestinais.
   </p>`;


    video_container = `  <section class="artigo">
<article>
    <h3>Tratamento Ozonio</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Keg55QskzNk?si=ALiDYIV0cEJFJotQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    beneficios_tratamento = `
<div class = "tratamento">
<div class="texto-tratamento">
<p>
Benefícios
Estimula a regeneração tecidual.
Combate infecções de forma natural.
Reduz inflamações crônicas.
Melhora a circulação sanguínea e a oxigenação dos tecidos.
Aumenta a resposta imunológica.
Riscos e contraindicações
Embora seja geralmente seguro quando realizado por profissionais qualificados, o tratamento pode apresentar riscos, como irritação ou desconforto na aplicação. É contraindicado para:

Gestantes.
Pessoas com anemia grave.
Pacientes com hipertireoidismo descontrolado.
Indivíduos com doenças cardíacas severas.

</p>
</div>
           <img src="img/beneficios-ozonioterapia-tratamento-acne-1.png" alt="" class= 'slide'>
        <img src="img/antes-depois-ozonio.jpg" alt="" class= 'slide'>
        <img src="img/antes-depois-ozonio1.png" alt="" class= 'slide'>
</div>
`
    video.innerHTML = video_container;
    beneficios.innerHTML = beneficios_tratamento

} else if (tratamento === 'ledterapia') {
    titulo = 'LedTerapia';
    imagemSrc = 'img/ledterapia.jpg'; // Caminho da imagem
    descricao = `<p class ='descricao'> A LEDterapia (ou fototerapia com LED) é um tratamento não invasivo que utiliza luzes de diferentes comprimentos de onda para promover benefícios terapêuticos e estéticos. Cada cor de luz penetra em diferentes camadas da pele, estimulando processos celulares específicos. É amplamente usada para melhorar a saúde da pele, acelerar a cicatrização, reduzir inflamações e promover rejuvenescimento.
<br><br>
Como funciona?
Emissão de luzes LED:
<br><br>
Os aparelhos de LED emitem luzes visíveis ou invisíveis (infravermelho) em intensidades controladas.
A luz penetra nas camadas da pele sem causar dor ou danos.
Estimulação celular:
<br><br>
A luz é absorvida pelas mitocôndrias (estruturas produtoras de energia nas células), aumentando a produção de ATP (energia celular).
Isso acelera processos de regeneração celular e reparação de tecidos.
Ação específica de cada cor:
<br><br>
Cada cor de LED tem um comprimento de onda diferente, atingindo diferentes profundidades da pele e oferecendo benefícios específicos.
Cores e suas funções
Luz Vermelha (620–750 nm):
<br><br>
Penetra profundamente na pele.
Estimula a produção de colágeno e elastina.
Reduz rugas, linhas finas e flacidez.
Melhora a circulação sanguínea.
Usada para rejuvenescimento facial e cicatrização.
Luz Azul (450–495 nm):
<br><br>
Atinge a camada superficial da pele.
Tem efeito bactericida, combatendo bactérias causadoras da acne.
Ajuda a controlar a oleosidade da pele.
Indicada para acne ativa e inflamações.
Luz Verde (495–570 nm):
<br><br>
Tem efeito calmante e relaxante.
Reduz manchas e hiperpigmentações.
Uniformiza o tom da pele.
Luz Amarela (570–620 nm):
<br><br>
Estimula a circulação linfática.
Melhora o aspecto de cicatrizes e estrias.
Tem efeito calmante para peles sensíveis.
Luz Infravermelha (invisível):
<br><br>
Penetra profundamente na pele e músculos.
Melhora a cicatrização de feridas.
Reduz dores musculares e promove regeneração.
Indicações
A LEDterapia é indicada para:
<br><br>
Tratamento de acne.
Redução de manchas e melasma.
Rejuvenescimento facial: diminuição de rugas e flacidez.
Estimulação da cicatrização de feridas.
Controle da oleosidade da pele.
Redução de inflamações e rosácea.
Melhora da aparência de estrias.
Alívio de dores musculares e articulares.
Como é realizado o procedimento?
Avaliação: O profissional avalia a condição da pele ou necessidade do paciente.
Higienização: A pele é limpa para remoção de maquiagem, sujeira ou oleosidade.
Aplicação da luz:
O aparelho de LED é posicionado próximo à pele.
O tempo de exposição varia de 10 a 30 minutos, dependendo do objetivo do tratamento.
Finalização: O profissional pode aplicar cremes ou protetor solar após a sessão.    </p>`;


    video_container = `  <section class="artigo">
<article>
    <h3>Ledterapia explicações</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/v3waSTPDMtY?si=VkoMNoCj0dY8L8r5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    beneficios_tratamento = `
<div class = "tratamento">
<div class="texto-tratamento">
<p>
Vantagens
Indolor e não invasivo.
Seguro para todos os tipos de pele.
Sem tempo de recuperação.
Pode ser combinado com outros tratamentos estéticos.
Resultados visíveis após algumas sessões.
Riscos e contraindicações
A LEDterapia é considerada segura, mas deve ser evitada em:

Pessoas com sensibilidade à luz.
Indivíduos com doenças de pele graves, como lúpus.
Mulheres grávidas (deve-se consultar o médico).
Pacientes com uso de medicamentos fotossensibilizantes.
Resultados
Os resultados são progressivos e podem ser percebidos após algumas sessões.
Geralmente, são necessárias 5 a 10 sessões, com intervalos semanais ou quinzenais, dependendo do objetivo.
</p>
</div>
           <img src="img/ledterapia-antes-dps.png" alt="" class= 'slide'>
        <img src="img/Ledterapia_topo.webp" alt="" class= 'slide'>
        <img src="img/antes-depois-ledterapia1.jpg.crdownload" alt="" class= 'slide'>

</div>
`
    video.innerHTML = video_container;
    beneficios.innerHTML = beneficios_tratamento

} else if (tratamento === 'peeling') {
    titulo = 'Peeling Facial';
    imagemSrc = 'img/peeling-facial-clidecem-e1677678321278-846x1024.jpg'; // Caminho da imagem
    descricao = `<p class ='descricao'> O peeling é um procedimento estético que promove a renovação da pele por meio da aplicação de substâncias químicas, mecânicas ou lasers. Ele remove as camadas mais superficiais ou profundas da pele, estimulando a regeneração celular e melhorando sua aparência e textura.
<br><br>
Tipos de Peeling
Peeling Químico:
<br><br>
Consiste na aplicação de ácidos (como ácido glicólico, salicílico ou retinóico) que agem sobre a pele para promover descamação e renovação celular.
É indicado para:
Clareamento de manchas (melasma, hiperpigmentação).
Tratamento de acne e cicatrizes leves.
Redução de rugas finas.
Peeling Físico ou Mecânico:
<br><br>
Utiliza partículas abrasivas (como cristais ou diamantes) para esfoliar a pele manualmente ou com máquinas.
É indicado para:
Melhorar a textura da pele.
Remover células mortas e estimular a circulação.
Reduzir poros dilatados.
Peeling com Laser:
<br><br>
O laser remove camadas da pele de forma precisa, promovendo regeneração.
Indicado para:
Tratamento de cicatrizes mais profundas.
Rejuvenescimento facial.
Redução de linhas de expressão e rugas.
Como funciona?
Ação Esfoliante:
<br><br>
O peeling remove as camadas externas da pele, onde estão células mortas, impurezas e danos causados por fatores como sol, poluição e envelhecimento.
Estimulação de Colágeno:
<br><br>
Ao remover as camadas superficiais, a pele reage regenerando novas células e estimulando a produção de colágeno, melhorando a firmeza e elasticidade.
Renovação Celular:
<br><br>
A regeneração celular promove uma pele mais lisa, uniforme e saudável.
Profundidade do Peeling
Peeling Superficial:
<br><br>
Remove apenas a camada mais externa da pele (epiderme).
Indicado para:
Manchas leves.
Acne e oleosidade.
Rejuvenescimento suave.
Recuperação: Geralmente de 2 a 5 dias.
Peeling Médio:
<br><br>
Atua na camada mais profunda da epiderme e na derme superficial.
Indicado para:
Rugas moderadas.
Cicatrizes de acne.
Manchas mais intensas.
Recuperação: De 7 a 10 dias, com descamação visível.
Peeling Profundo:
<br><br>
Remove camadas profundas da derme.
Indicado para:
Rugas profundas.
Cicatrizes severas.
Danos graves causados pelo sol.
Recuperação: Pode levar semanas e exige cuidados rigorosos.
    </p>`;


    video_container = `  <section class="artigo">
<article>
    <h3>Sobre o Peeling</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/A47iqi9rrCg?si=KGszBxGS2zdEQ-Nf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    beneficios_tratamento = `
<div class = "tratamento">
<div class="texto-tratamento">
<p>
Benefícios
Reduz manchas e hiperpigmentações.
Melhora a textura da pele, deixando-a mais macia.
Minimiza rugas e linhas finas.
Combate acne e reduz poros dilatados.
Trata cicatrizes e marcas de acne.
Uniformiza o tom da pele.
Como é o procedimento?
Avaliação inicial: Um dermatologista ou esteticista analisa a pele para indicar o tipo de peeling mais adequado.
Preparação: A pele é higienizada e, em alguns casos, preparada com produtos pré-procedimento.
Aplicação: O produto químico, abrasivo ou laser é aplicado na área desejada.
Finalização: Cremes calmantes e protetores solares são usados para proteger a pele.
Cuidados Pós-Peeling
Proteção solar rigorosa: Evite exposição ao sol e use protetor solar com FPS alto.
Hidratação: Use hidratantes recomendados pelo profissional.
Evite tocar ou descascar a pele: Isso pode causar manchas ou infecções.
Produtos indicados: Siga as orientações do profissional sobre o uso de ácidos ou hidratantes.
Contraindicações
Gravidez e amamentação (em alguns casos).
Pele com infecções ou feridas ativas.
Alergia aos componentes usados.
Exposição solar recente ou programada.
Uso de isotretinoína (deve-se esperar pelo menos 6 meses após o término).
Resultados
Os resultados podem ser vistos após algumas sessões, dependendo da profundidade e do tipo de peeling.
Peelings superficiais têm resultados mais rápidos, enquanto os profundos demandam mais tempo para cicatrização, mas oferecem melhorias significativas.
Consulte sempre um dermatologista para garantir a segurança e eficácia do procedimento.
</p>
</div>
       <img src="img/peeling-facial-clidecem-e1677678321278-846x1024.jpg" alt="" class= 'slide'>
        <img src="img/Peeling-Ultrassônico-O-Que-É-Como-Funciona-Indicações-Antes-E-Depois-E-Preços-4.jpg" alt="" class= 'slide'>
        <img src="img/peeling-thumb_1160x790.jpg" alt="" class= 'slide'>
</div>
`
    video.innerHTML = video_container;
    beneficios.innerHTML = beneficios_tratamento

} else {
    titulo = 'Tratamento não encontrado';
    descricao = `<p class ='descricao'>    </p>`;


    video_container = `  <section class="artigo">
<article>
    <h3>Dicas do butox</h3>
<iframe width="560" height="315" src="https://www.youtube.com/embed/h-KiTPapEDM?si=8JYv_D7X1OgBlTCD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

    beneficios_tratamento = `
<div class = "tratamento">
<div class="texto-tratamento">
<p>

</p>
</div>
    <img src="img/antes-e-depois-botox-800x590.jpg" alt="" class= 'slide'>
        <img src="img/botox-cosmetic-89-view-1-detail.jpg" alt="" class= 'slide'>
        <img src="img/Botox-antes-e-depois.webp" alt="" class= 'slide'>

</div>
`
    video.innerHTML = video_container;
    beneficios.innerHTML = beneficios_tratamento
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