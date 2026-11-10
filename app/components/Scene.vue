<script setup lang="ts">
import Ironman from "./Ironman.vue";

const ironmanRef = ref<InstanceType<typeof Ironman> | null>(null);

let destroyCameraAnimation: (() => void) | null = null;
let destroyBlenderAnimation: (() => void) | null = null;

watchEffect(() => {
  const camera = ironmanRef.value?.getCamera();
  const target = ironmanRef.value?.getCameraTarget();

  if (!camera || !target) return;

  const { init: cameraInit, destroy: cameraDestroy } = useCameraAnimation(
    camera,
    target,
  );
  const { init: blenderInit, destroy: blenderDestroy } =
    useBlenderAnimation(ironmanRef);

  cameraInit();
  blenderInit();

  destroyCameraAnimation = cameraDestroy;
  destroyBlenderAnimation = blenderDestroy;
});

onBeforeUnmount(() => {
  destroyCameraAnimation?.();
  destroyBlenderAnimation?.();
});
</script>

<template>
  <Ironman ref="ironmanRef" />
</template>
