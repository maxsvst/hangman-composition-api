<template>
  <GameHeader />
  <div class="game-container">
    <GameFigure />
    <GameWrongLetters />
    <GameWord :word="12"/>
  </div>
  <GamePopup />
  <GameNotification />
</template>

<script setup>
import GameFigure from "./components/GameFigure.vue";
import GameWrongLetters from "./components/GameWrongLetters.vue";
import GameWord from "./components/GameWord.vue";
import GamePopup from "./components/GamePopup.vue";
import GameNotification from "./components/GameNotification.vue";
import GameHeader from "./components/GameHeader.vue";
</script>
