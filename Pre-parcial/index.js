let cantidadBolsas;
let pesosBolsas = [];
let pesoMinimo;

function iniciar() {
    cantidadBolsas = parseInt(prompt("Ingrese la cantidad total de bolsas"));
    pesoMinimo = parseInt(prompt("Ingrese el peso minimo"));

    if (comprobar(cantidadBolsas) && comprobar(pesoMinimo)) {
        inputBolsas();
        const porcentajeBolsasValidas = calcularBolsasValidas();
        alert(
            "El porcentaje de bolsas validas es: " + porcentajeBolsasValidas + "%"
        );
        alert(
            "El porcentaje de bolsas invalidas es: " +
            (100 - porcentajeBolsasValidas) + "%");
        if (pesoPromedio() > pesoMinimo) {
            alert("El peso promedio es más alto que el minimo establecido.");
        } else if (pesoPromedio() < pesoMinimo) {
            alert("El peso promedio es menor que el minimo establecido.");
        } else {
            alert("El peso promedio es igual al minimo establecido.");
        }
    }
}

function comprobar(valor) {
    if (!Number.isInteger(valor)) {
        alert("El dato ingresado no es valido");
        return false;
    } else {
        return true;
    }
}

function inputBolsas() {
    for (let i = 0; i < cantidadBolsas; i++) {
        const bolsaActual = parseInt(
            prompt("Ingrese el peso de la bolsa N°" + (i + 1))
        );
        if (comprobar(bolsaActual)) {
            pesosBolsas.push(bolsaActual);
        } else {
            iniciar();
            break;
        }
    }
}

function calcularBolsasValidas() {
    let bolsasValidas = 0;
    for (let i = 0; i < pesosBolsas.length; i++) {
        if (pesosBolsas[i] >= pesoMinimo) {
            bolsasValidas++;
        }
    }

    return (bolsasValidas * 100) / cantidadBolsas;
}

function pesoPromedio() {
    let pesoTotal = 0;
    for (let i = 0; i < pesosBolsas.length; i++) {
        pesoTotal += pesosBolsas[i];
    }

    return pesoTotal / cantidadBolsas;
}
