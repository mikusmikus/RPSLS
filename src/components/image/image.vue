<template>
  <div class="image-wrapper" :class="gameAnimation && 'gameAnimation'">
    <img :src="getImgUrl(weapon || alt)" :alt="alt" class="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Component = defineComponent({
  name: 'Image',
  props: {
    weapon: {
      type: String,
      required: true,
    },
    alt: String,
    gameAnimation: Boolean,
  },
  methods: {
    getImgUrl(name: string) {
      const img = require.context('../../assets/', false, /\.png$/);
      return img(`./${name}.png`);
    },
  },
});

export default Component;
</script>
<style src="./image.scss" lang="scss" scoped></style>
