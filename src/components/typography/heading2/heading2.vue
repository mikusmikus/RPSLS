<template>
  <h2 class="heading2">
    <slot></slot>
  </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Component = defineComponent({
  name: 'Heading2',
});

export default Component;
</script>

<style src="./heading2.scss" lang="scss" scoped></style>
