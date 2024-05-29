
const notas = [7.5, 8.0, 9.0];


const somaNotas = notas.reduce((total, nota) => total + nota, 0);
const media = somaNotas / notas.length;


console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);
console.log(`A média do aluno é: ${media}`);


if (media >= 7) {
    console.log("O aluno está: APROVADO");
} else {
    console.log("O aluno está: REPROVADO");
}
