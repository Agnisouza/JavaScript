
function soma(a,b){
    const resultado = a + b;
    return resultado;
}
console.log(soma(50,50));



function saudacao(){
    console.log("Boa Noite");

}
saudacao();


function saudacao1(nome){
    console.log(`Boa noite ${nome}`);
}
saudacao1("João");


const raiz = function(n){
    return n ** 0.5;
}
console.log(raiz(9));
console.log(raiz(16));

const raiz1= (n) =>{
    return n ** 0.5;
};
console.log(raiz1(6561));


const raiz2 = n => n ** 0.5;
console.log(raiz2(9));
