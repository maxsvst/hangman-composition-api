<template>
  <div v-if="wrongLetters.length" class="wrong-letters-container">
    <div class="wrong-letters">
      <p>Ошибки</p>
      <span
        v-for="(wrongLetter, index) in wrongLetters"
        :key="wrongLetter + index"
        >{{
          index + 1 === wrongLetters.length ? wrongLetter : wrongLetter + ", "
        }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wrongLetters: Array,
  },
};
</script>
