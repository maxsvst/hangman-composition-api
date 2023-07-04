<template>
  <div class="word">
    <span
      v-for="(letter, index) in name"
      :key="letter + index"
      class="letter"
      >{{ correctLetters.includes(letter) ? letter : "" }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    correctLetters: Array,
  },
  setup() {},
};
</script>
