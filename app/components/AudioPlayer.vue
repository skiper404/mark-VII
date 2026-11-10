<script setup lang="ts">
const { t } = useI18n();

const audio = ref<HTMLAudioElement | null>(null);

const isPlaying = ref(false);
const showWelcome = ref(true);

const toggleAudio = () => {
  if (!audio.value) return;

  if (isPlaying.value) {
    audio.value.pause();
    isPlaying.value = false;
    return;
  }

  audio.value.play();
  isPlaying.value = true;
};

const enableAudio = () => {
  if (!audio.value) return;

  audio.value.play();
  isPlaying.value = true;
  showWelcome.value = false;
};

onMounted(() => {
  audio.value = new Audio("/audio/ACDC_-_Highway_To_Hell.mp3");
  audio.value.loop = true;
  audio.value.volume = 0.35;
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="showWelcome"
      class="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
    >
      <div
        class="w-full max-w-md border border-white/10 bg-black/80 p-8 text-white shadow-2xl sm:p-10"
      >
        <p class="text-xs font-medium uppercase tracking-[0.4em] text-red-500">
          {{ t("audio.welcome.label") }}
        </p>

        <h2 class="mt-4 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
          {{ t("audio.welcome.title") }}
        </h2>

        <p class="mt-5 text-sm leading-6 text-white/50 sm:text-base">
          {{ t("audio.welcome.description") }}
        </p>

        <button
          class="mt-8 w-full border border-white/20 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-white/90"
          @click="enableAudio"
        >
          {{ t("audio.welcome.enable") }}
        </button>

        <button
          class="mt-4 w-full py-2 text-xs uppercase tracking-[0.2em] text-white/30 transition hover:text-white/60"
          @click="showWelcome = false"
        >
          {{ t("audio.welcome.continue") }}
        </button>
      </div>
    </div>
  </Transition>

  <button
    v-if="!showWelcome"
    class="pointer-events-auto fixed bottom-6 right-6 z-50 flex items-center gap-3 border border-white/10 bg-black/70 px-4 py-3 text-xs uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:border-white/30"
    @click="toggleAudio"
  >
    <span
      class="h-2 w-2 rounded-full"
      :class="isPlaying ? 'bg-red-500' : 'bg-white/30'"
    ></span>

    {{ isPlaying ? t("audio.on") : t("audio.off") }}
  </button>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
