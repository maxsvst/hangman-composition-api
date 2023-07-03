<template>
  <div class="word">
    <span
      v-for="(letter, index) in word"
      :key="letter + index"
      class="letter"
    ></span>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    console.log(props.word);
  },
};
</script>
