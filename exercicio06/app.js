function holerite(){
    let horas, ganho, salario
    horas = document.getElementById ("horas").value
    ganho = document.getElementById ("ganho").value
    salario = parseFloat (horas) * parseFloat (ganho)
    document.getElementById("salario").innerText="Seu salário é: R$" + salario
}
