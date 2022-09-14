//======= A =========
function numeros (num1, num2){
    return num1 + num2
}
console.log(numeros(5,5))

//======= B =========
function maiorMenor (num1, num2){
    console.log("o primeiro número é maior ou igual ao segundo?", num1 >= num2)
}
console.log(maiorMenor(5,5))

//======= C =========
const numerosPares = (numero) =>{
    if (numero %2 !== 0) {
        console.log("esse numero não é par")
    }else{
        console.log("esse numero é par")
    }
}
numerosPares(6)

//======= D =========
const tamanhoString = (nomeString) =>{
    return nomeString.length
}
const nome = "igor"
console.log(tamanhoString(nome))