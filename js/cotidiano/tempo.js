// Happy Math - Tempo

function corrigir() {

    const gabarito = {
        1: "Um minuto possui 60 segundos.",
        2: "Uma hora possui 60 minutos.",
        3: "Uma semana possui 7 dias.",
        4: "Um ano possui 12 meses.",
        5: "Uma corrida muito rápida pode ser medida em segundos.",
        6: "08:30 representa oito horas e trinta minutos.",
        7: "Das 8:00 às 9:00 passa-se 1 hora.",
        8: "Um dia é maior que uma hora, um minuto e um segundo.",
        9: "Se hoje é segunda-feira, amanhã será terça-feira.",
        10: "Das 14:00 às 16:00 passam-se 2 horas."
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