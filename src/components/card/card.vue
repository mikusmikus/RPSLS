<template>
  <div class="card" :class="cardClass">
    <slot></slot>
    <div class="card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Component = defineComponent({
  name: 'Card',
  props: {
    cardClass: String,
  },
});

export default Component;
</script>

<style src="./card.scss" lang="scss" scoped></style>
