<script setup lang="ts">
import * as THREE from "three";
import { useTresContext, type TresCamera } from "@tresjs/core";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const { state, progress, isLoading } = useLoader(
  GLTFLoader,
  "/models/mark7.glb",
);

const modelLoading = useState("mark7-loading", () => true);
const modelProgress = useState("mark7-progress", () => 0);

watch(
  [isLoading, () => progress.percentage],
  ([loading, value]) => {
    modelLoading.value = loading;
    modelProgress.value = value;
  },
  { immediate: true },
);

const { camera: cameraManager } = useTresContext();

const mixer = shallowRef<THREE.AnimationMixer | null>(null);
const cameraRef = shallowRef<THREE.PerspectiveCamera | null>(null);
const cameraTargetRef = shallowRef<THREE.Object3D | null>(null);

watch(
  () => state.value,
  (gltf) => {
    if (!gltf) return;

    //Получание точки
    const target = gltf.scene.getObjectByName("CameraTarget");
    if (!target) return;
    cameraTargetRef.value = target;

    // Получение камеры
    const camera = gltf.scene.getObjectByName(
      "Camera",
    ) as THREE.PerspectiveCamera;
    if (!camera) return;
    cameraRef.value = camera;

    // Делаем камеру из Blender активной
    cameraManager.registerCamera(camera as TresCamera, true);
    mixer.value = new THREE.AnimationMixer(gltf.scene);
    const action = mixer.value.clipAction(gltf.animations[0]!);
    action.play();
  },
  { immediate: true },
);

const setProgress = (progress: number) => {
  if (!mixer.value || !state.value) return;

  const duration = state.value.animations[0]!.duration;
  const clampedProgress = THREE.MathUtils.clamp(progress, 0, 1);

  mixer.value.setTime(clampedProgress * duration);
};

const getCamera = () => cameraRef.value;
const getCameraTarget = () => cameraTargetRef.value;

defineExpose({
  setProgress,
  getCamera,
  getCameraTarget,
});
</script>

<template>
  <primitive v-if="state" :object="state.scene" />
</template>
