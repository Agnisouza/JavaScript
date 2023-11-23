function imc(peso, altura){
    const imc = (peso / (altura * altura)).toFixed(2);
    return imc;
}
console.log(imc(71, 1.75));

if (imc(71, 1.75) < 18.5){
    console.log("Abaixo do peso");
}
else if (imc(71, 1.75) >= 18.5 && imc(71, 1.75) <= 24.9){
    console.log("Peso normal");
}
else if (imc(71, 1.75) >= 25 && imc(71, 1.75) <= 29.9){
    console.log("Sobrepeso");
}
else if (imc(71, 1.75) >= 30 && imc(71, 1.75) <= 34.9){
    console.log("Obesidade grau 1");
}
else if (imc(71, 1.75) >= 35 && imc(71, 1.75) <= 39.9){
    console.log("Obesidade grau 2");
}
else if (imc(71, 1.75) >= 40){
    console.log("Obesidade grau 3");
}
