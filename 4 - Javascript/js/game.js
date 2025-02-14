const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

let current_key = "k";
let current_score = 0;
let is_game_started = false;

function initializeGame() {
  if (!is_game_started) {
    document.addEventListener("keydown", checkKeyPress);
    document.getElementById("game_message").textContent = "Game Started!";
    document.getElementById("start_game").textContent = "End Game";
    is_game_started = true;
  } else {
    document.removeEventListener("keydown", checkKeyPress);
    document.getElementById("game_message").textContent =
      "You are currently in Free Mode. Press the [Start Game] button to start game.";
    document.getElementById("start_game").textContent = "Start Game";
    resetGameState();
  }
}

function resetGameState() {
  current_key = "k";
  current_score = 0;
  is_game_started = false;
  updateScoreDisplay();
}

function checkKeyPress(e) {
  let does_key_match = current_key === e.key;
  if (does_key_match) {
    current_score++;
  }
  updateScoreDisplay();
  clearKeyState();
  updateKeyState(does_key_match);
  updateNextKey();
}

function updateKeyState(is_match) {
  const key = document.getElementById("key-display");
  key.classList.add(is_match ? "right" : "wrong");
}

function clearKeyState() {
  const key = document.getElementById("key-display");
  ["normal", "right", "wrong"].forEach((i) => {
    if (!key.classList.contains(i)) return;
    key.classList.remove(i);
  });
}

function updateNextKey() {
  current_key = generateNextKey();
  const key = document.getElementById("key-display");
  key.textContent = current_key.toLocaleUpperCase();
  setTimeout(() => {
    clearKeyState();
    key.classList.add("normal");
  }, 300);
}

function updateScoreDisplay() {
  document.getElementById("score").value = current_score;
}

function generateNextKey() {
  return keys[Math.floor(Math.random() * keys.length)];
}

export default initializeGame;
