// Happy Math - Números Negativos

function corrigir() {
    
    let acertos = 0;

    const gabarito = {
        1: "O número -3 é um número negativo.",
        2: "O número 4 é positivo.",
        3: "A temperatura de -5 °C está abaixo de zero.",
        4: "-3 é o menor número entre as alternativas.",
        5: "-2 é o maior número entre as alternativas.",
        6: "O número -4 está mais à esquerda na reta numérica.",
        7: "-1 é o número mais próximo de zero.",
        8: "-2 é menor que 3.",
        9: "-1 é o maior número entre as alternativas.",
        10: "O número 0 está entre -2 e 2."
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