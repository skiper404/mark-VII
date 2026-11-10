<script setup lang="ts">
import Scene from "./Scene.vue";
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-0">
    <TresCanvas>
      <Scene />
    </TresCanvas>
  </div>
</template>
