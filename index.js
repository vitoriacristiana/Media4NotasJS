let nota01 = Number(prompt("Informe a primeira nota:"));
let nota02 = Number(prompt("Informe a segunda nota:"));
let nota03 = Number(prompt("Informe a terceira nota:"));
let nota04 = Number(prompt("Informe a quarta nota:"));

if (nota01 < 0 || nota01 > 10 ||
    nota02 < 0 || nota02 > 10 ||
    nota03 < 0 || nota03 > 10 ||
    nota04 < 0 || nota04 > 10) {
        alert("Digite somente notas entre 0 e 10.");
} else {
    let media = (nota01 + nota02 + nota03 + nota04) / 4;

    let resultado;

    if (media < 5) {
        resultado = "Reprovado";
    } else if (media < 6) {
        resultado = "Em recuperação";
    } else {
        resultado = "Aprovado";
    }

    alert(`Você ficou com média ${media}. Resultado: ${resultado}.`);
}