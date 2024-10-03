const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nos dias de hoje, percebe-se que em alguns casos há algumas famílias que sofrem com a falta de união. Portanto, é de interesse do quiz saber se há casos que há desunião na sua família. Para citar como exemplo, podemos falar sobre a família do Joãozinho, que possui dois pais professores que tem altas cargas horárias e pouco tempo para ficar em casa com o filho.",
        alternativas: [
            {
                texto: "Sim, acontecem casos assim na minha família.",
            },
            {
                texto: "Não, minha família não possui nenhuma problemática.",
            }
        ]
    },
    {
        enunciado: "Bom, acredita-se que um dos entraves que dificultam o bom relacionamento na família é o excesso de horas gastas que os pais passam fora de casa e que isso deixa os filhos as vezes solitários e quando os pais chegam em casa não podem dar atenção aos filhos devido ao cansaço do dia trabalhado.",
        alternativas: [
            {
                texto: "Sim! Creio que esse seja o motivo principal!",
            },
            {
                texto: "Não! Há outros problemas maiores!",
            }
        ]
    },
    {
        enunciado: "Como dito no primeiro quadrinho, Joãozinho possuía dois pais extremamente ocupados, e isso fazia com que ele se sentisse muito sozinho, tendo em vista que ele também não podia sair de casa devido ao mando de seus pais. Você concorda com a conduta que os pais de Joãozinho seguem com ele?",
        alternativas: [
            {
                texto: "Sim, os filhos quando novos não podem ter a liberdade de poder sair a qualquer lugar.",
            },
            {
                texto: "Não, criança as vezes precisa se sentir livre para poder sair a um lugar que precisa.",
            }
        ]
    },
    {
        enunciado: "No caso, quando era final de semana, os pais de Joãozinho podiam passar um tempo em casa, assim o pequeno João tentava criar um diálogo com seus pais, que não terminava com muito sucesso. Isso deixava ele muito mal, e depois disso resolvia se isolar para não ter que sofrer com essa situação. Você acha certo a atitude que os pais de Joãozinho tomavam sobre o ignorar por estarem muito cansados?",
        alternativas: [
            {
                texto: "Sim, quando se está cansado é preciso que ninguém venha incomodar a gente.",
            },
            {
                texto: "Não, atitude completamente errada dos pais dele.",
            }
        ]
    },
    {
        enuncia
            {
            },
            {
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
