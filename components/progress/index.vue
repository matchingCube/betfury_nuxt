<template>
  <!-- Progressbar building -->
  <div class="progress-bar">
    <div
      class="progress-bar-overlay"
      :style="{ width: percentage + '%' }"
    ></div>
    <div class="progress-txt">{{ percentage }}%</div>
  </div>
</template>

<script>
export default {
  name: "progress-bar",
  props: {
    percentage: Number,
  },
};
</script>

<style lang="scss">
.progress-bar {
  height: 10px;
  width: 100%;
  border-radius: 20px;
  background-color: #202a39;
  position: relative;
  overflow: hidden;
}

.progress-bar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 20px;
  background-color: #2ddc4b;
}

.progress-txt {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  font-weight: 400;
  color: #fff;
}
</style>
