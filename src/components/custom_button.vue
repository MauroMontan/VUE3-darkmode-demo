<script setup lang="ts">
defineProps<{
  theme: string;
}>();
</script>
<template>
  <div class="button">
    <button :class="theme">
      <slot />
    </button>
  </div>
</template>
<style scoped>
.button {
  background-color: teal;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
}

.button button {
  border: none;
  padding: 0.3rem;
  margin: 0;
}
.dark {
  color: black;
  background-color: lightgreen;
  transition: all ease 0.4s;
  font-weight: 100;
}
.light {
  color: white;
  transition: all ease 0.4s;
  background-color: lightcoral;
  font-weight: 100;
}
</style>
