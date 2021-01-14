<template>
  <button type="button" :class="buttonClass" :disabled="disabled" @click="$emit('onClick')">
    <slot></slot>
    <span v-show="gun" class="popup">{{ gun }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Component = defineComponent({
  name: 'button',
  props: {
    buttonClass: String,
    disabled: Boolean,
    gun: String,
  },
});

export default Component;
</script>

<style src="./button.scss" lang="scss" scoped></style>
