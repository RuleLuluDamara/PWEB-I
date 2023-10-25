<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index" :style="getBackgroundStyle(index)">
        {{ todo.teks }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [{ teks: "Learn Javascript - (Belajar JavaScript dari nol)" }, { teks: "Learn Vue - (Belajar Vue dari nol)" }, { teks: "Build Something awesome - (Belajar JavaScript dari Vue dari Nol)" }],
    };
  },
  methods: {
    getBackgroundStyle(index) {
      if (index === 0 || index === 2) {
        return {
          backgroundColor: "red",
          /* You can adjust other styles as needed */
        };
      }
      return {}; // Return an empty object if no special style is needed
    },
  },
};
</script>
