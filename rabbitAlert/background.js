function getText(tipo){
    return tipo[Math.floor(Math.random() * tipo.length)]
}

function getRandomInt(max) {
  return (Math.floor(Math.random() * max) + 1) * 10000;
}

let frases = [
    "Já respondeu o Cliente?",
    "Já fechou o chat?",
    "se ta mexendo no celular é pq já respondeu cliente",
    "e essas suas demandas aí?",
    "Cuidado pra não ocupar a tela inteira com essa cabeça e esquecer do cliente.",
    "Uma cabeça desse tamanho... será que cabe a ideia de responder o cliente?",
    "Cabeça de datacenter e produtividade de calculadora.",
    "Tá supondo demais pro meu gosto hein",
    "suporte foi feito pra supor... e não pra suportar essa sua demora aí",
    "ta de cagada remunerada ou ta demorando pra responder de propósito?"
];
let nomes = [
    "Pairulito do Suporte",
    "Cabeça de data-center",
    "Cabeça de nós todos",
    "Cabaça de Berimbau",
    "Craniums Enormiuns",
    "Mega Brain",
    "Alargador de Capacete",
    "Cabeça orbitante",
    "Cosplay de M.O.D.O.K",
    "Cabeçote de transformer",
];

let number = getRandomInt(10);
const url = chrome.runtime.getURL("imgs/rabbit.png");
setInterval(() =>{
    console.log("icon url:", url);
    chrome.notifications.create({
            type: "basic",
            iconUrl: url,
            title: getText(nomes),
            message: getText(frases)
        });
    number = getRandomInt(10);
}, number); // 10000 = 10s