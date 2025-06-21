 var numero = 10

numero = numero + 1
numero += 1
numero++
alert(numero) 

var body = document.querySelector("body")
var numero  = Number(prompt("digite um numero"))

for (var i =0; i <= 10 ;i ++){
    body.innerHTML += `<p>${numero} X ${i} = ${numero * i}</p>`
}