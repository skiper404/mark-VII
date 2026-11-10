<script setup lang="ts">
const { t } = useI18n();

defineProps<{
  progress: number;
}>();
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
  >
    <div class="w-80">
      <div class="mb-3 flex justify-between font-mono">
        <span>{{ t("loading.title") }}</span>
        <span>{{ Math.round(progress) }}%</span>
      </div>

      <div class="h-1 overflow-hidden bg-white/20">
        <div
          class="h-full bg-red-500 transition-[width] duration-200"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>
