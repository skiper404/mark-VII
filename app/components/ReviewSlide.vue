<script setup lang="ts">
const props = defineProps<{
  translationKey: string;
  position: SlidePosition;
  titleClass: string;
  descriptionClass: string;
  isFinal?: boolean;
}>();

const { t } = useI18n();

const positions = {
  top: "top-20 left-1/2 -translate-x-1/2",
  left: "left-1/4 -translate-x-1/2 top-1/4",
  right: "right-1/4 top-1/4",
};
</script>

<template>
  <div :class="['absolute w-[800px] text-center', positions[position]]">
    <h2
      :class="[
        'text-8xl font-bold',
        isFinal ? 'text-black' : 'text-red-500',
        titleClass,
      ]"
    >
      {{ t(`review.${translationKey}.title`) }}
    </h2>

    <p
      :class="[
        'mt-4 text-xl',
        isFinal ? 'text-black' : 'text-white/80',
        ,
        descriptionClass,
      ]"
    >
      {{ t(`review.${translationKey}.description`) }}
    </p>
  </div>
</template>
