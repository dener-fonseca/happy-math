// Happy Math - Porcentagem

function corrigir() {

    const gabarito = {
        1: "O símbolo % representa a porcentagem.",
        2: "50% significa 50 de 100.",
        3: "100% representa o total.",
        4: "50% de 100 é igual a 50.",
        5: "50% representa a metade.",
        6: "25% representa um quarto.",
        7: "20% das bolas são vermelhas.",
        8: "0% representa nenhuma parte.",
        9: "50% da turma gosta de matemática.",
        10: "25% representa um quarto do preço."
};

    verificarQuestoes(gabarito);
}


function verificarQuestoes(gabarito) {

    let acertos = 0;

    for (let i = 1; i <= 10; i++) {

        const resposta = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        if (!resposta) {

            mostrarModal(
                "Responda a questão " + i + " antes de finalizar."
            );

            document.querySelector(
                `input[name="q${i}"]`
            ).scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            return;
        }
    }

    for (let i = 1; i <= 10; i++) {

        const resposta = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        const texto = document.getElementById(`resp${i}`);

        texto.classList.remove("correta", "incorreta");

        if (resposta.dataset.correta === "true") {

            acertos++;

            texto.innerHTML =
                "<strong>Você acertou!</strong>" +
                gabarito[i];

            texto.classList.add("correta");

        } else {

            texto.innerHTML =
                "<strong>Você errou!</strong>" +
                gabarito[i];

            texto.classList.add("incorreta");
        }
    }

    document.getElementById("resultado").textContent =
        "Você acertou " + acertos + " de 10 questões!";

    document.getElementById("resultado")
        .classList.add("visivel");
}


function reiniciar() {

    document.querySelectorAll(
        "input[type='radio']"
    ).forEach(function(radio) {
        radio.checked = false;
    });

    document.getElementById("resultado").textContent = "";

    document.getElementById("resultado")
        .classList.remove("visivel");

    for (let i = 1; i <= 10; i++) {

        const resposta = document.getElementById("resp" + i);

        resposta.innerHTML = "";

        resposta.classList.remove(
            "correta",
            "incorreta"
        );
    }

    fecharModal();

    document.querySelector(
        'input[name="q1"]'
    ).scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function mostrarModal(texto) {

    document.getElementById("mensagemModal").textContent = texto;

    document.getElementById("modal")
        .classList.add("aberto");
}


function fecharModal() {

    document.getElementById("modal")
        .classList.remove("aberto");
}