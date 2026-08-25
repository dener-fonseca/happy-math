// Happy Math - Dinheiro

function corrigir() {

    const gabarito = {
        1: "A moeda usada no Brasil é o real.",
        2: "O símbolo do real é R$.",
        3: "100 centavos correspondem a 1 real.",
        4: "R$ 0,50 corresponde a cinquenta centavos.",
        5: "R$ 10,00 é maior que R$ 5,00, R$ 2,00 e R$ 1,00.",
        6: "Se uma bala custa R$ 2,00, duas balas custam R$ 4,00.",
        7: "R$ 20,00 - R$ 15,00 = R$ 5,00. Portanto, o troco será de R$ 5,00.",
        8: "R$ 0,25 corresponde a vinte e cinco centavos.",
        9: "R$ 10,00 - R$ 6,00 = R$ 4,00. Portanto, sobrarão R$ 4,00.",
        10: "R$ 25,00 - R$ 20,00 = R$ 5,00. Portanto, faltam R$ 5,00."
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