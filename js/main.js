/**
 * 
 */

/*
var nome = "Marcelo Santos";
var n1 = 45;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos");
alert(n1 + n2)
console.log(nome);
console.log(n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/

/**
 * 
*/
/*
var lista = ["maça", "pêra", "laranja"];
console.log(lista[1]);
alert(lista[0]);
lista.push("uva", "manga");
lista.push("manga");
console.log(lista)
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" | "));


// dicionário
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta)
console.log(fruta.nome);
alert(fruta.cor);

var frutas = [
                {nome:"maça", cor:"vermelha"},
                {nome:"pêra", cor:"amarela"},
                {nome:"uma", cor:"verde"}
            ]
console.log(frutas);
console.log(frutas[1].nome + " - " + frutas[1].cor);
*/

/**
 * 
 */
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
}


var count = 1;
while (count <= 5){
    console.log(count);
    count++;
};

var count;
for(count=1; count<=5; count++){
    console.log("for..." + count);
};

var d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth()+1);
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
*/

/**
 * 
 */
/*
function soma(n1, n2){
    return n1 + n2;
};

var n1 = prompt("Qual é o 1º número?")*1;
var n2 = prompt("Qual é o 2º número?")*1;

alert("A soma dos números " + n1 + " e "
     + n2 + " é " + soma(n1, n2) + ".");

function setReplace(frase, termo_ant, termo_nov){
    return frase.replace(termo_ant, termo_nov);
}

alert("Frase original: 'Vamos lá Japão!'");
alert("Frase modificada: '" + 
        setReplace("Vamos lá Japão!",
        "Japão", "Brasil") + "'");

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    if (validar){
        return "Você é maior de idade!"
    }else{
        return "Você é menor de idade!"
    }
    
}

alert(validaIdade(prompt("Qual sua idade?")));

*/

function botao(){
    alert("Obrigado por clicar");
};

function clicou(){
    document.getElementById("agradecimento").
    innerHTML = "Obrigado por <b>clicar<b/>!";
};

function redirecionar(){
    //abri a página em uma nova aba
    window.open("https://google.com");
    //abri a página na mesma aba (substitui a página atual)
    window.location.href = "https://google.com";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Página carregada...");
}

function funcChange(elemento){
    console.log(elemento.value);
}