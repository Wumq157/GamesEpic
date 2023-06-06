var peso = Number(window.prompt("Diga qual o seu peso:"))
var altura = Number(window.prompt("Dga qual a sua Altura:"))
var altura2 = altura ** 2
var imc = peso / altura2

document.write(`Seu imc é de ${imc}, com base nesse valor você deve procurar a ajuda correta.`)

