const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está pensando em comprar um carro novo e tem que decidir entre um carro elétrico e um carro a gasolina. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Um carro elétrico parece ser uma escolha sustentável e moderna.",
                afirmacao: "Optou por um carro elétrico pensando na preservação ambiental e na inovação tecnológica."
            },
            {
                texto: "Um carro a gasolina pode ser mais barato e ter mais opções de modelos.",
                afirmacao: "Preferiu um carro a gasolina por questões de custo inicial e variedade de modelos disponíveis."
            }
        ]
    },
    {
        enunciado: "Você está fazendo uma viagem longa e precisa escolher um carro para alugar. Qual fator é mais importante para você?",
        alternativas: [
            {
                texto: "O conforto do carro é fundamental para uma viagem tranquila.",
                afirmacao: "Escolheu um carro com assentos confortáveis e um bom sistema de climatização para garantir uma viagem mais agradável."
            },
            {
                texto: "A economia de combustível é a prioridade para economizar durante a viagem.",
                afirmacao: "Optou por um carro que ofereça boa eficiência de combustível para economizar em despesas durante a viagem."
            }
        ]
    },
    {
        enunciado: "Você está planejando a manutenção do seu carro. Qual aspecto você considera mais importante?",
        alternativas: [
            {
                texto: "Manter o motor em ótimo estado para garantir o desempenho do veículo.",
                afirmacao: "Focou na manutenção do motor para assegurar que o carro continue funcionando bem e com boa performance."
            },
            {
                texto: "Verificar e substituir os pneus regularmente para garantir a segurança.",
                afirmacao: "Prioriza a verificação e substituição dos pneus para manter a segurança e a dirigibilidade do carro."
            }
        ]
    },
    {
        enunciado: "Você está escolhendo um carro para uso diário na cidade. Qual característica é essencial para você?",
        alternativas: [
            {
                texto: "O carro deve ter um bom consumo urbano para economizar em combustível.",
                afirmacao: "Escolheu um carro com excelente economia de combustível em ambientes urbanos para reduzir custos diários."
            },
            {
                texto: "Precisa ter um tamanho compacto para facilitar o estacionamento e a mobilidade na cidade.",
                afirmacao: "Optou por um carro compacto para facilitar o estacionamento e a movimentação em ruas e avenidas da cidade."
            }
        ]
    },
    {
        enunciado: "Você está participando de uma competição de carros clássicos. Qual aspecto do carro você considera mais importante?",
        alternativas: [
            {
                texto: "A autenticidade e o estado de conservação original do carro são cruciais.",
                afirmacao: "Enfatizou a preservação da autenticidade e do estado original do carro para competir em um evento de carros clássicos."
            },
            {
                texto: "A modificação estética e a personalização do carro podem impressionar mais.",
                afirmacao: "Optou por personalizar o carro para se destacar na competição com modificações estéticas e inovadoras."
            }
        ]
    },
    {
        enunciado: "Você está pensando em vender seu carro atual e comprar um modelo mais novo. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Pesquisas de mercado para entender o valor de venda do seu carro e as opções disponíveis.",
                afirmacao: "Faz pesquisas detalhadas sobre o valor do seu carro no mercado e as melhores ofertas para um modelo novo."
            },
            {
                texto: "Verifica quais são as características mais desejadas no mercado para escolher o novo carro.",
                afirmacao: "Foca em identificar as características mais procuradas no mercado para garantir que o novo carro atenda às suas necessidades."
            }
        ]
    }
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
