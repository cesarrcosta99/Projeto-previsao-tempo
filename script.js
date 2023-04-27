const key = "fb18603d612f2b7683ef07914e7553fe"
const button = document.querySelector(".botao")
console.log(button)

function colocarDadosNaTela(dados) {
    const nomeCidade = document.getElementsByTagName("h2")[0]
    const textoPrevisao = document.getElementsByClassName("texto-previsao")[0]
    console.log(dados)
    nomeCidade.innerHTML = `Tempo em ${dados.name}`
    textoPrevisao.innerHTML = dados.weather[0].description
    document.querySelector(".temp").innerHTML=`${(dados.main.temp).toFixed(0)}°C`
    document.querySelector(".umidade").innerHTML=`Umidade:${dados.main.humidity}%`
    document.querySelector(".img-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    colocarDadosNaTela(dados)

}

const cliqueiNoBotao = () => {
    const cidade = document.getElementsByClassName("input")[0].value

    buscarCidade(cidade)
}

button.addEventListener("click", cliqueiNoBotao)



