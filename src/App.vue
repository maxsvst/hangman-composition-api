<template>
  <GameHeader />
  <div class="game-container">
    <GameFigure :wrong-letters-length="wrongLetters.length" />
    <GameWrongLetters :wrong-letters="wrongLetters" />
    <GameWord :name="name" :correct-letters="correctLetters" />
  </div>
  <GamePopup ref="popup" @gameRestart="gameRestart" :name="name" />
  <GameNotification ref="notification" />
</template>

<script setup>
import GameFigure from "./components/GameFigure.vue";
import GameWrongLetters from "./components/GameWrongLetters.vue";
import GameWord from "./components/GameWord.vue";
import GamePopup from "./components/GamePopup.vue";
import GameNotification from "./components/GameNotification.vue";
import GameHeader from "./components/GameHeader.vue";
import { ref, watch } from "vue";
import { useRandomWord } from "./composables/useRandomWord";
import { useLetters } from "./composables/useLetters";
import { useNotification } from "./composables/useNotification";

const { name, getRandomWord } = useRandomWord();
const {
  letters,
  correctLetters,
  wrongLetters,
  isWin,
  isLose,
  addLetter,
  resetLetters,
} = useLetters(name);
const { notification, showNotification } = useNotification();

const popup = ref(null);

const gameRestart = async () => {
  await getRandomWord();
  popup.value?.closePopup();
  resetLetters();
};

watch(wrongLetters, () => {
  if (isLose.value) {
    popup.value?.openPopup("lose");
  }
});

watch(correctLetters, () => {
  if (isWin.value) {
    popup.value?.openPopup("win");
  }
});

window.addEventListener("keydown", ({ key }) => {
  if (isWin.value || isLose.value) {
    return;
  }

  if (letters.value.includes(key)) {
    showNotification;
    return;
  }

  addLetter(key);
});
</script>
