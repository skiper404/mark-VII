<script setup lang="ts">
import MarkVII from "./MarkVII.vue";

const markVIIRef = ref<InstanceType<typeof MarkVII> | null>(null);

let destroyCameraAnimation: (() => void) | null = null;
let destroyBlenderAnimation: (() => void) | null = null;

watchEffect(() => {
  const camera = markVIIRef.value?.getCamera();
  const target = markVIIRef.value?.getCameraTarget();

  if (!camera || !target) return;

  const { init: cameraInit, destroy: cameraDestroy } = useCameraAnimation(
    camera,
    target,
  );
  const { init: blenderInit, destroy: blenderDestroy } =
    useBlenderAnimation(markVIIRef);

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
  <MarkVII ref="markVIIRef" />
</template>
