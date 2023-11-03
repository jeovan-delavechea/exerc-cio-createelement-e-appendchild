const tituloDoSite = document.createElement('h1');
tituloDoSite.id = 'titulo';
tituloDoSite.innerText = "NicoLoja Ltda"

const produtoAVenda = document.createElement('div')
produtoAVenda.className = "produto"
produtoAVenda.innerHTML = `
    <img src="./src/img/maquina-de-lavar.jpg" alt="maquina de lavar Eletrolux" />
    <h2 class="nome"><a href="https://www.amazon.com.br/Lavadora-Electrolux-LED13-Essential-Filter/dp/B09B7X4JSZ/ref=asc_df_B09B7X4JSZ/?tag=googleshopp00-20&linkCode=df0&hvadid=407967566107&hvpos=&hvnetw=g&hvrand=92901442508426768&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1032068&hvtargid=pla-1638146408563&th=1" target="_blank">Máquina de lavar</a></h2>
    <p class="preco"><strong>R$1849,00</strong></p>
    <p class="descricao">
        Exclusiva Tecnologia Jet&Clean - Dispenser autolimpante com tecnologia Jet&Clean, que através de fortes jatos de água otimiza o uso do sabão e do amaciante, além de diluí-los em até 100%¹ antes de entrarem em contato com as roupas, evitando manchas e relavagem. ¹Teste comparativo interno realizado com a LT10B (sem Jet&Clean), verificando a distribuição dos insumos líquidos na carga de roupa mais próxima ao fundo do cesto, segundo testes internos da Electrolux. Área atingida pelo amaciante de 99,99% e desvio padrão 0,01.
    </p>
`

const body = document.querySelector('body');
body.appendChild(tituloDoSite)
body.appendChild(produtoAVenda)


console.log(tituloDoSite, produtoAVenda)