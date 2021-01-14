<template>
  <h1 class="heading1">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Component = defineComponent({
  name: 'Heading1',
});

export default Component;
</script>

<style src="./heading1.scss" lang="scss" scoped></style>
