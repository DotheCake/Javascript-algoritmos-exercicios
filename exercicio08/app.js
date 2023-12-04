function converter(){
    let fahrenheit, celsius
    celsius = document.getElementById ("celsius").value
    fahrenheit = parseFloat (celsius) * 1.8 + 32
    document.getElementById("conversao").innerText="A temperatura em F° é: " + fahrenheit + "°"
}