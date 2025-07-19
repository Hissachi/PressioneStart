// Todas as casas de Game of Thrones
const houses = [
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

let currentQuestionIndex = 0;
let score = 0;
let shuffledHouses: typeof houses = [];

// Elementos do DOM
const startScreen = document.getElementById("start-screen")!;
const questionContainer = document.getElementById("question-container")!;
const startBtn = document.getElementById("start-btn")!;
const questionEl = document.getElementById("question")!;
const flagImageEl = document.getElementById("flag-image") as HTMLImageElement;
const optionsEl = document.getElementById("options")!;
const resultEl = document.getElementById("result")!;

// Iniciar o quiz (com aleatoriedade)
startBtn.addEventListener("click", () => {
  shuffledHouses = [...houses].sort(() => Math.random() - 0.5); // Embaralha as casas
  currentQuestionIndex = 0;
  score = 0;
  startScreen.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  showQuestion();
});

// Mostrar pergunta
function showQuestion() {
  const currentHouse = shuffledHouses[currentQuestionIndex];
  questionEl.textContent = "Qual casa tem esta bandeira?";
  flagImageEl.src = currentHouse.flag;

  // Opções aleatórias (incluindo a correta)
  const options = [currentHouse];
  while (options.length < 4) {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    if (!options.some(opt => opt.name === randomHouse.name)) {
      options.push(randomHouse);
    }
  }

  // Embaralha as opções
  const shuffledOptions = [...options].sort(() => Math.random() - 0.5);

  // Limpa e adiciona os botões
  optionsEl.innerHTML = "";
  shuffledOptions.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.name;
    button.className = "bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition";
    button.addEventListener("click", () => selectAnswer(option.name === currentHouse.name));
    optionsEl.appendChild(button);
  });
}

// Verificar resposta
function selectAnswer(isCorrect: boolean) {
  if (isCorrect) {
    score++;
    resultEl.textContent = "Correto! ✅";
    resultEl.className = "text-green-500";
  } else {
    resultEl.textContent = "Errado! ❌";
    resultEl.className = "text-red-500";
  }

  resultEl.classList.remove("hidden");

  // Próxima pergunta ou finalizar
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledHouses.length) {
      showQuestion();
      resultEl.classList.add("hidden");
    } else {
      endQuiz();
    }
  }, 1000);
}

// Finalizar quiz
function endQuiz() {
  questionContainer.innerHTML = `
    <h2 class="text-2xl font-semibold mb-6">Quiz Concluído!</h2>
    <p class="text-xl mb-4">Sua pontuação: ${score} / ${shuffledHouses.length}</p>
    <button onclick="location.reload()" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg">
      Jogar Novamente
    </button>
  `;
}