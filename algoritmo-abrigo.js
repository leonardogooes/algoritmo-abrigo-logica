// Algoritmo de construção do abrigo heróis

let nomePersonagem = "NinjaGo"
let materialAbrigo = ["Madeira", "Pedra"]
let quantidadeMaterial = 100
let materialNecessario = 70
const mensagemFinal = "Caro " + nomePersonagem + " seu abrigo foi finalizado"


if(materialAbrigo[0] === "Madeira" && materialAbrigo[1] === "Pedra") {
	console.log("Você tem os materiais necessários")
} else {
	console.log("Colete os itens que é necessário")
}
if(quantidadeMaterial >= materialNecessario) {
	console.log("Você tem materiais suficientes")
} else {
	console.log("Materiais insuficientes")
}
quantidadeMaterial = 10
materialNecessario = 30

if (quantidadeMaterial >= materialNecessario) {
	console.log("Você pode terminar de construir seu abrigo")
    console.log (mensagemFinal)
} else {
	console.log("Você precisa coletar mais materiais")
}