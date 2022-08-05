function sumar() {
    let a = document.getElementById("n1").value;
    let a1 = parseInt(a, 10);
    let b = document.getElementById("n2").value;
    let b1 = parseInt(b, 10);
    let c = a1 + b1;
    document.getElementById("result").innerHTML = `The result of the sum of ${a1} plus ${b1} is<br><b>${c}</b>`
}

function restar() {
    let a = document.getElementById("n1").value;
    let a1 = parseInt(a, 10);
    let b = document.getElementById("n2").value;
    let b1 = parseInt(b, 10);
    let c = a1 - b1;
    document.getElementById("result").innerHTML = `The result of the subtraction of ${a1} minus ${b1} is <br><b>${c}</b>`
}

function multiplicar() {
    let a = document.getElementById("n1").value;
    let a1 = parseInt(a, 10);
    let b = document.getElementById("n2").value;
    let b1 = parseInt(b, 10);
    let c = a1 * b1;
    document.getElementById("result").innerHTML = `The result of multiplying ${a1} by ${b1} is <br><b>${c}</b>`
}

function dividir() {
    let a = document.getElementById("n1").value;
    let a1 = parseInt(a, 10);
    let b = document.getElementById("n2").value;
    let b1 = parseInt(b, 10);
    let c = a1 / b1;
    document.getElementById("result").innerHTML = `The result of dividing ${a1} by ${b1} is <br><b>${c}</b>`
}