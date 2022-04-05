<script setup lang="ts">
import { computed } from "vue";
import content from "./components/base.vue";
import Switch from "./components/switch.vue";
import { useTheme } from "./store/index";

const themeStore = useTheme();
const currentTheme = computed(() => themeStore.currentTheme);
</script>

<template>
  <div :class="currentTheme" class="app">
    <header :class="currentTheme">
      <h3 :class="currentTheme">Darkmode demo</h3>
      <Switch :theme="currentTheme" @toggle="themeStore.toggleThemeMode" />
    </header>
    <content :theme="currentTheme" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
* {
  box-sizing: border-box;
  margin: 0;
  color: white;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
}

#app {
  background-color: white;
  height: 100vh;
  position: fixed;
  width: 100%;
}

.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

header {
  width: 90%;
  display: flex;
  transition: ease-in 0.4s;
  padding: 0.5rem;
  align-items: center;
  height: 4rem;
  justify-content: space-between;
}

.dark {
  background-color: rgb(21, 22, 24);
  transition: all ease 0.4s;
  color: lightgreen;
}
.light {
  color: lightcoral;
  background-color: white;
  transition: all ease 0.4s;
}
</style>
