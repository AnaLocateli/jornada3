async function quantidadeTrabalhadores() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json'
    const res = await fetch(url)
    const dados = await res.json()
    const trabalhos = Object.keys(dados)
    const quantidadeTrabalho = Object.values(dados)
  
  const data = [
    {
      x: trabalhos,
      y: quantidadeTrabalho,
      type: 'bar'
    }  
  ]
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data)

}
  
quantidadeTrabalhadores()
