// Todas as casas de Game of Thrones
const houses = [
  { name: "Arryn", flag: "./assets/House_Arryn.png" },
  { name: "Ashford", flag: "./assets/House_Ashford.png" },
  { name: "Baelish", flag: "./assets/House_Baelish__Harrenhal_.png" },
  { name: "Baratheon", flag: "./assets/House_Baratheon.png" },
  { name: "Blackfyre", flag: "./assets/House_Blackfyre.png" },
  { name: "Blackwood", flag: "./assets/House_Blackwood.png" },
  { name: "Blount", flag: "./assets/House_Blount.png" },
  { name: "Bolton", flag: "./assets/House_Bolton.png" },
  { name: "Bracken", flag: "./assets/House_Bracken.png" },
  { name: "Celtigar", flag: "./assets/House_Celtigar_2.png" },
  { name: "Cerwyn", flag: "./assets/House_Cerwyn.png" },
  { name: "Clegane", flag: "./assets/House_Clegane.png" },
  { name: "Connington", flag: "./assets/House_Connington.png" },
  { name: "Corbray", flag: "./assets/House_Corbray.png" },
  { name: "Crakehall", flag: "./assets/House_Crakehall.png" },
  { name: "Cressey", flag: "./assets/House_Cressey.png" },
  { name: "Dayne", flag: "./assets/House_Dayne.png" },
  { name: "Dondarrion", flag: "./assets/House_Dondarrion.png" },
  { name: "Dustin", flag: "./assets/House_Dustin.png" },
  { name: "Estermont", flag: "./assets/House_Estermont.png" },
  { name: "Florent", flag: "./assets/House_Florent.png" },
  { name: "Fossoway", flag: "./assets/House_Fossoway_of_Cider_Hall.png" },
  { name: "Frey", flag: "./assets/House_Frey.png" },
  { name: "Gardener", flag: "./assets/House_Gardener.png" },
  { name: "Glover", flag: "./assets/House_Glover.png" },
  { name: "Greyjoy", flag: "./assets/House_Greyjoy.png" },
  { name: "Harlaw", flag: "./assets/House_Harlaw.png" },
  { name: "Hightower", flag: "./assets/House_Hightower.png" },
  { name: "Hoare", flag: "./assets/House_Hoare_2.png" },
  { name: "Hornwood", flag: "./assets/House_Hornwood.png" },
  { name: "Karstark", flag: "./assets/House_Karstark.png" },
  { name: "Lannister", flag: "./assets/House_Lannister.png" },
  { name: "Locke", flag: "./assets/House_Locke_2.png" },
  { name: "Mallery", flag: "./assets/House_Mallery.png" },
  { name: "Mallister", flag: "./assets/House_Mallister.png" },
  { name: "Marsh", flag: "./assets/House_Marsh.png" },
  { name: "Massey", flag: "./assets/House_Massey.png" },
  { name: "Martell", flag: "./assets/House_Martell.png" },
  { name: "Merryweather", flag: "./assets/House_Merryweather.png" },
  { name: "Mormont", flag: "./assets/House_Mormont.png" },
  { name: "Oakheart", flag: "./assets/House_Oakheart.png" },
  { name: "Poole", flag: "./assets/House_Poole.png" },
  { name: "Redwyne", flag: "./assets/House_Redwyne.png" },
  { name: "Reed", flag: "./assets/House_Reed.png" },
  { name: "Reynes", flag: "./assets/House_Reyne.png" },
  { name: "Rosby", flag: "./assets/House_Rosby.png" },
  { name: "Rykker", flag: "./assets/House_Rykker.png" },
  { name: "Ryswell", flag: "./assets/House_Ryswell.png" },
  { name: "Seaworth", flag: "./assets/House_Seaworth.png" },
  { name: "Selmy", flag: "./assets/House_Selmy.png" },
  { name: "Slynt", flag: "./assets/House_Slynt.png" },
  { name: "Stark", flag: "./assets/House_Stark.png" },
  { name: "Staunton", flag: "./assets/House_Staunton.png" },
  { name: "Stokeworth", flag: "./assets/House_Stokeworth.png" },
  { name: "Stout", flag: "./assets/House_Stout.png" },
  { name: "Swann", flag: "./assets/House_Swann.png" },
  { name: "Targaryen", flag: "./assets/House_Targaryen.png" },
  { name: "Tarly", flag: "./assets/House_Tarly.png" },
  { name: "Tarth", flag: "./assets/House_Tarth.png" },
  { name: "Tully", flag: "./assets/House_Tully.png" },
  { name: "Tyrell", flag: "./assets/House_Tyrell.png" },
  { name: "Umber", flag: "./assets/House_Umber.png" },
  { name: "Velaryon", flag: "./assets/House_Velaryon.png" },
  { name: "Westerling", flag: "./assets/House_Westerling.png" },
  { name: "Whent", flag: "./assets/House_Whent.png" },
  { name: "Yronwood", flag: "./assets/House_Yronwood.png" },
  { name: "Night's Watch", flag: "./assets/House_Night's_Watch.png" },
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

startBtn.addEventListener("click", () => {
  shuffledHouses = [...houses].sort(() => Math.random() - 0.5); // Embaralha as casas
  currentQuestionIndex = 0;
  score = 0;
  startScreen.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  showQuestion();
});

function showQuestion() {
  const currentHouse = shuffledHouses[currentQuestionIndex];
  questionEl.textContent = "Qual casa tem esta bandeira?";
  flagImageEl.src = currentHouse.flag;

  const options = [currentHouse];
  while (options.length < 4) {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    if (!options.some(opt => opt.name === randomHouse.name)) {
      options.push(randomHouse);
    }
  }

  const shuffledOptions = [...options].sort(() => Math.random() - 0.5);

  optionsEl.innerHTML = "";
  shuffledOptions.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.name;
    button.className = "bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition";
    button.addEventListener("click", () => selectAnswer(option.name === currentHouse.name));
    optionsEl.appendChild(button);
  });
}

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

function endQuiz() {
  questionContainer.innerHTML = `
    <h2 class="text-2xl font-semibold mb-6">Quiz Concluído!</h2>
    <p class="text-xl mb-4">Sua pontuação: ${score} / ${shuffledHouses.length}</p>
    <button onclick="location.reload()" class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg">
      Jogar Novamente
    </button>
  `;
}