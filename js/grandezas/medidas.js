// Happy Math - Medidas

function corrigir() {

    const gabarito = {
        1: "O centímetro é uma unidade adequada para medir o comprimento de um lápis.",
        2: "O quilômetro é uma unidade adequada para medir a distância entre duas cidades.",
        3: "O quilograma é uma unidade usada para medir a massa de objetos.",
        4: "O quilograma é uma unidade adequada para medir a massa de uma melancia.",
        5: "O mililitro é usado para medir pequenas quantidades de líquido.",
        6: "O litro é uma unidade adequada para medir a quantidade de água de uma garrafa grande.",
        7: "O metro é uma unidade adequada para medir a altura de uma porta.",
        8: "O litro é uma unidade que mede capacidade.",
        9: "O grama é uma unidade adequada para medir a massa de um pequeno pacote de açúcar.",
        10: "Centímetro, metro e quilômetro são unidades de comprimento."
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