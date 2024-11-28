const url= 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()

    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
    const trabalhadoresMundo = (dados.total_trabalhadores_mundo/1e9)
    const tempoDeslTrabalho = parseInt(dados.tempo_medio_deslocamento_para_trabalho*10)
    

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `O mundo tem<span>${pessoasMundo}</span>  bilhões de pessoas, dessas pessoas, aproximadamente <span>${trabalhadoresMundo}</span>   bilhões estão empregadas e passam em média <span>${tempoDeslTrabalho}</span>  horas por dia trabalhando. Temos, portanto, mais da metade da população mundial que não exerce trabalhos com vínculos empregatícios legais. O que pode significar que há longevidade e desse modo, muitas pessoas aposentadas. Porém, também pode significar muitos postos de trabalho chamados informais. `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();
