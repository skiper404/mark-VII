<script setup lang="ts">
import ReviewSlide from "./components/ReviewSlide.vue";
import { reviewSlides } from "./data/reviewSlides.ts";
import Footer from "./components/Footer.vue";

useSeoMeta({
  title: "Iron Man — Mark VII",
  description:
    "Explore the Iron Man Mark VII in an interactive 3D experience. Discover its engineering, design and advanced flight capabilities.",

  ogTitle: "Iron Man — Mark VII",
  ogDescription:
    "An interactive 3D experience dedicated to one of the most iconic Iron Man armors.",
  ogType: "website",
  ogImage: "/images/markVII.jpg",

  twitterCard: "summary_large_image",
});

const { hasFinishLoading, progress } = await useProgress();

const { init: introInit, destroy: introDestroy } = useIntroAnimation();
const { init: reviewInit, destroy: reviewDestroy } = useReviewAnimation();

onMounted(() => {
  introInit();
  reviewInit();
});

onBeforeUnmount(() => {
  introDestroy();
  reviewDestroy();
});
</script>

<template>
  <div class="font-asimovian">
    <Header />
    <LoadingScreen v-if="!hasFinishLoading" :progress="progress" />

    <Canvas />

    <main class="relative z-10">
      <section class="intro h-[300vh]"></section>

      <div class="review">
        <section class="review-helmet h-[100vh]"></section>
        <section class="review-chest h-[100vh]"></section>
        <section class="review-hand h-[100vh]"></section>
        <section class="review-boots h-[100vh]"></section>
        <section class="review-ergonomic h-[100vh]"></section>
        <section class="review-summary h-[100vh]"></section>
      </div>
      <Footer />
    </main>

    <section class="pointer-events-none fixed inset-0 z-10">
      <ReviewSlide
        v-for="review in reviewSlides"
        :key="review.translationKey"
        :translation-key="review.translationKey"
        :position="review.position"
        :title-class="review.titleClass"
        :description-class="review.descriptionClass"
        :is-final="'isFinal' in review ? review.isFinal : false"
      />
      <AudioPlayer />
    </section>
  </div>
</template>

<style>
.font-asimovian {
  font-family: "Science Gothic", sans-serif;
}
</style>
