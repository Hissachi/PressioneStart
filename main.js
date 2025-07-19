var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Todas as casas de Game of Thrones
var houses = [
    { name: "Stark", flag: "./assets/House_Stark.png" },
    { name: "Lannister", flag: "./assets/House_Lannister.png" },
    { name: "Targaryen", flag: "./assets/House_Targaryen.png" },
    { name: "Baratheon", flag: "./assets/House_Baratheon.png" },
    { name: "Greyjoy", flag: "./assets/House_Greyjoy.png" },
    { name: "Tyrell", flag: "./assets/House_Tyrell.png" },
    { name: "Martell", flag: "./assets/House_Martell.png" },
    { name: "Arryn", flag: "./assets/House_Arryn.png" },
    { name: "Bolton", flag: "./assets/House_Bolton.png" },
    { name: "Tully", flag: "./assets/House_Tully.png" },
    { name: "Frey", flag: "./assets/House_Frey.png" },
    { name: "Mormont", flag: "./assets/House_Mormont.png" },
    { name: "Tarly", flag: "./assets/House_Tarly.png" },
    { name: "Tarth", flag: "./assets/House_Tarth.png" },
    { name: "Marsh", flag: "./assets/House_Marsh.png" },
    { name: "Oakheart", flag: "./assets/House_Oakheart.png" },
    { name: "Blackwood", flag: "./assets/House_Blackwood.png" },
    { name: "Bracken", flag: "./assets/House_Bracken.png" },
    { name: "Massey", flag: "./assets/House_Massey.png" },
    { name: "Merryweather", flag: "./assets/House_Merryweather.png" },
];
var currentQuestionIndex = 0;
var score = 0;
var shuffledHouses = [];
// Elementos do DOM
var startScreen = document.getElementById("start-screen");
var questionContainer = document.getElementById("question-container");
var startBtn = document.getElementById("start-btn");
var questionEl = document.getElementById("question");
var flagImageEl = document.getElementById("flag-image");
var optionsEl = document.getElementById("options");
var resultEl = document.getElementById("result");
// Iniciar o quiz (com aleatoriedade)
startBtn.addEventListener("click", function () {
    shuffledHouses = __spreadArray([], houses, true).sort(function () { return Math.random() - 0.5; }); // Embaralha as casas
    currentQuestionIndex = 0;
    score = 0;
    startScreen.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
});
// Mostrar pergunta
function showQuestion() {
    var currentHouse = shuffledHouses[currentQuestionIndex];
    questionEl.textContent = "Qual casa tem esta bandeira?";
    flagImageEl.src = currentHouse.flag;
    // Opções aleatórias (incluindo a correta)
    var options = [currentHouse];
    var _loop_1 = function () {
        var randomHouse = houses[Math.floor(Math.random() * houses.length)];
        if (!options.some(function (opt) { return opt.name === randomHouse.name; })) {
            options.push(randomHouse);
        }
    };
    while (options.length < 4) {
        _loop_1();
    }
    // Embaralha as opções
    var shuffledOptions = __spreadArray([], options, true).sort(function () { return Math.random() - 0.5; });
    // Limpa e adiciona os botões
    optionsEl.innerHTML = "";
    shuffledOptions.forEach(function (option) {
        var button = document.createElement("button");
        button.textContent = option.name;
        button.className = "bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition";
        button.addEventListener("click", function () { return selectAnswer(option.name === currentHouse.name); });
        optionsEl.appendChild(button);
    });
}
// Verificar resposta
function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
        resultEl.textContent = "Correto! ✅";
        resultEl.className = "text-green-500";
    }
    else {
        resultEl.textContent = "Errado! ❌";
        resultEl.className = "text-red-500";
    }
    resultEl.classList.remove("hidden");
    // Próxima pergunta ou finalizar
    setTimeout(function () {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledHouses.length) {
            showQuestion();
            resultEl.classList.add("hidden");
        }
        else {
            endQuiz();
        }
    }, 1000);
}
// Finalizar quiz
function endQuiz() {
    questionContainer.innerHTML = "\n    <h2 class=\"text-2xl font-semibold mb-6\">Quiz Conclu\u00EDdo!</h2>\n    <p class=\"text-xl mb-4\">Sua pontua\u00E7\u00E3o: ".concat(score, " / ").concat(shuffledHouses.length, "</p>\n    <button onclick=\"location.reload()\" class=\"bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg\">\n      Jogar Novamente\n    </button>\n  ");
}
