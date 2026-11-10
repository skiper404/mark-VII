<script setup lang="ts">
const armorUrl =
  "https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man_Armor:_Mark_VII";

const { t, locale, setLocale } = useI18n();

const toggleLocale = () => {
  setLocale(locale.value === "en" ? "ru" : "en");
};
</script>

<template>
  <header
    class="pointer-events-none fixed left-0 top-0 z-30 w-full bg-black/50 px-6 pb-2 pt-3 md:px-12"
  >
    <div
      class="relative flex items-center justify-between border-b border-white/20 pb-4"
    >
      <div class="flex items-center gap-3">
        <div
          class="flex size-10 items-center justify-center rounded border border-red-500/40 bg-red-500/10"
        >
          <span class="text-xl font-bold text-red-500">S</span>
        </div>

        <div class="hidden lg:block">
          <h1 class="text-sm font-bold tracking-[0.2em] text-white">
            {{ t("header.company") }}
          </h1>
          <p class="mt-1 text-[9px] tracking-[0.2em] text-white/40">
            {{ t("header.division") }}
          </p>
        </div>
      </div>

      <div class="absolute left-1/2 -translate-x-1/2 text-center">
        <p class="text-xl font-bold tracking-[0.3em] text-white md:text-2xl">
          MARK VII
        </p>
        <p class="mt-1 text-[9px] tracking-[0.35em] text-red-500">
          {{ t("header.armor") }}
        </p>
      </div>

      <button
        class="pointer-events-auto mx-2 ml-auto flex hidden items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10 lg:block"
        @click="toggleLocale"
      >
        <span
          class="hidden text-[10px] font-medium tracking-[0.15em] text-white/70 transition-colors group-hover:text-white sm:block"
        >
          {{ locale }}
        </span>
      </button>

      <a
        :href="armorUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="group pointer-events-auto flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10"
      >
        <span
          class="hidden text-[10px] font-medium tracking-[0.15em] text-white/70 transition-colors group-hover:text-white sm:block"
        >
          {{ t("header.database") }}
        </span>

        <Icon name="heroicons:arrow-up-right-solid" class="text-red-500" />
      </a>
    </div>
  </header>
</template>
