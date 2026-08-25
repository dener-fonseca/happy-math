// Happy Math - Comparação de Números

function corrigir() {

    let acertos = 0;

    const gabarito = {
        1: "8 é maior que 5.",
        2: "3 é menor que 7.",
        3: "8 é maior que 5.",
        4: "2 é menor que 6.",
        5: "4 é igual a 4.",
        6: "9 é maior que 4.",
        7: "2 é menor que 5.",
        8: "7 é igual a 7.",
        9: "10 é maior que 6.",
        10: "3 é menor que 9."
};

    verificarQuestoes(gabarito);
}


function verificarQuestoes(gabarito) {

    let acertos = 0;

    // Verifica se todas as questões foram respondidas
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


    // Corrige as questões
    for (let i = 1; i <= 10; i++) {

        const resposta = document.querySelector(
            `input[name="q${i}"]:checked`
        );

        const texto = document.getElementById(`resp${i}`);

        texto.classList.remove(
            "correta",
            "incorreta"
        );


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


    // Mostra o resultado
    const resultado = document.getElementById("resultado");

    resultado.textContent =
        "Você acertou " + acertos + " de 10 questões!";

    resultado.classList.add("visivel");
}


function reiniciar() {

    // Desmarca as alternativas
    document.querySelectorAll(
        "input[type='radio']"
    ).forEach(function(radio) {

        radio.checked = false;

    });


    // Apaga o resultado
    const resultado = document.getElementById("resultado");

    resultado.textContent = "";

    resultado.classList.remove("visivel");


    // Apaga as respostas
    for (let i = 1; i <= 10; i++) {

        const resposta = document.getElementById(
            "resp" + i
        );

        resposta.innerHTML = "";

        resposta.classList.remove(
            "correta",
            "incorreta"
        );
    }


    fecharModal();


    // Volta para a primeira questão
    document.querySelector(
        'input[name="q1"]'
    ).scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function mostrarModal(texto) {

    document.getElementById(
        "mensagemModal"
    ).textContent = texto;

    document.getElementById(
        "modal"
    ).classList.add("aberto");
}


function fecharModal() {

    document.getElementById(
        "modal"
    ).classList.remove("aberto");
}