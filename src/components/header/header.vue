<template>
  <div class="row center-xs">
    <div class="col-xs-12">
      <H1
        >ROUNDS PLAYED: <span class="secondary font-size--50"> {{ statistic.length }}</span></H1
      >
    </div>
    <div class="col-xs-4 font-size--40" v-for="(name, index) in names" :key="index">
      <H2>
        <span v-if="index === 1">TIE: </span>
        <span v-else>WIN: </span>
        <span class="primary">{{ winCount(statistic, name) }}</span>
      </H2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import H1 from '../typography/heading1/heading1.vue';
import H2 from '../typography/heading2/heading2.vue';
import { Statistic } from '../../types/types';

const Component = defineComponent({
  name: 'Header',
  components: {
    H1,
    H2,
  },
  props: {
    statistic: Array as PropType<Statistic[]>,
    names: Array,
  },
  methods: {
    winCount(statistic: Statistic[], name: string) {
      return statistic.filter(({ winner }) => winner === name).length;
    },
  },
});

export default Component;
</script>

<style lang="scss" scoped></style>
