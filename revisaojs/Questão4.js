let notas = [7.8, 8.8, 6.1];


console.log("A primeira nota do aluno é: " + notas[0]);
console.log("A segunda nota do aluno é: " + notas[1]);
console.log("A terceira nota do aluno é: " + notas[2]);

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media = soma / notas.length;

console.log("A média do aluno é: " + media);
