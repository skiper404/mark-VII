<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section
    class="review-footer flex min-h-screen items-center bg-black px-6 py-16 text-white sm:px-10 lg:px-16"
  >
    <div class="mx-auto flex w-full max-w-7xl flex-col justify-between gap-16">
      <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div class="flex flex-col justify-center">
          <p
            class="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-red-500"
          >
            {{ t("footer.label") }}
          </p>

          <h2
            class="max-w-3xl text-5xl font-bold leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
          >
            {{ t("footer.title") }}
            <span class="text-white/40"> {{ t("footer.titleHighlight") }}</span>
          </h2>

          <p
            class="mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg"
          >
            {{ t("footer.description") }}
          </p>
        </div>

        <div class="flex flex-col justify-center">
          <div class="border-t border-white/10 pt-6">
            <p
              class="text-xs font-medium uppercase tracking-[0.3em] text-white/40"
            >
              {{ t("footer.project.label") }}
            </p>

            <p
              class="mt-4 max-w-lg text-sm leading-6 text-white/60 sm:text-base"
            >
              {{ t("footer.project.description") }}
            </p>
          </div>

          <div class="mt-10 border-t border-white/10 pt-6">
            <p
              class="text-xs font-medium uppercase tracking-[0.3em] text-white/40"
            >
              {{ t("footer.technologies.label") }}
            </p>

            <p class="mt-4 text-sm leading-6 text-white/80 sm:text-base">
              {{ t("footer.technologies.value") }}
            </p>
          </div>

          <div class="mt-10 border-t border-white/10 pt-6">
            <p
              class="text-xs font-medium uppercase tracking-[0.3em] text-white/40"
            >
              {{ t("footer.credits.label") }}
            </p>

            <p class="mt-4 max-w-lg text-sm leading-6 text-white/50">
              {{ t("footer.credits.description") }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>{{ t("footer.copyright") }}</p>

        <p class="sm:text-right">
          {{ t("footer.tagline") }}
        </p>
      </div>
    </div>
  </section>
</template>
