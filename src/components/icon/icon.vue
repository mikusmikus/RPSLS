<template>
  <i class="material-icons primary">
    <slot> </slot>
  </i>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Component = defineComponent({
  name: 'Icon',
});

export default Component;
</script>

<style lang="scss" scoped></style>
