<script setup lang="ts">
defineProps<{
  active?: boolean;
  theme?: string;
}>();

defineEmits<{
  (event: "toggle"): void;
}>();
</script>
<template>
  <label>
    <input
      :checked="active"
      @click="$emit('toggle')"
      v-model="active"
      type="checkbox"
    />
    <span :class="theme" class="slider class material-icons" />
  </label>
</template>
<style scoped>
input[type="checkbox"] {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}
.slider {
  position: relative;
  display: block;
  width: 3rem;
  height: 1.5rem;
  background-color: aquamarine;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  cursor: pointer;
  border-radius: 0.9rem;
  overflow: hidden;
  transition: ease-in 0.5s;
}

.slider:before {
  content: "light_mode";
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  top: 0.15rem;
  left: 0.2rem;
  background-color: white;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  transition: ease-in 0.5s;
}

input[type="checkbox"]:checked ~ .slider:before {
  transform: translateX(1.4rem);
  content: "dark_mode";
}
.light {
  background-color: lightcoral;
  color: black;
}
.dark {
  background-color: lightgreen;
  color: black;
}
</style>
