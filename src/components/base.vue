<script setup lang="ts">
import { useTheme } from "../store";
import pButton from "./custom_button.vue";

const themeStore = useTheme();
</script>
<template>
  <div :class="themeStore.currentTheme" class="content">
    <h1 :class="themeStore.currentTheme">Lorem ipsum</h1>
    <p :class="themeStore.currentTheme">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et delectus
      aspernatur soluta, tenetur sunt ducimus libero nisi eligendi distinctio
      cupiditate non doloribus consequatur voluptate numquam ullam, ab, sapiente
      quos culpa.
    </p>

    <div class="actions">
      <p-button :theme="themeStore.currentTheme">
        {{ themeStore.currentTheme }}
      </p-button>
    </div>
  </div>
</template>
<style scoped>
.content {
  width: 90%;
  height: 70%;
  border-radius: 1rem;
  margin: auto;
  padding: 1rem;
  display: flex;
  background-color: white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}

.actions {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}

p {
  text-align: justify;
}
.dark {
  color: lightgreen;
  background-color: rgb(38, 39, 43);
  transition: all ease 0.4s;
}
.light {
  color: lightcoral;
  transition: all ease 0.4s;
  background-color: white;
}

@media (max-width: 768px) {
  .content {
    height: 90%;
    font-size: 0.2rem;
    overflow: scroll;
  }
}
</style>
