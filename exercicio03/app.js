function calcular(){
    let numero1, numero2, soma
    numero1 = document.getElementById ("numero1").value
    numero2 = document.getElementById ("numero2").value
    soma = (parseFloat(numero1) + parseFloat(numero2))
    document.getElementById("resultado").innerText="Sua soma é: " + soma
}