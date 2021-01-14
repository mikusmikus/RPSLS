<template>
  <div class="table">
    <table v-show="lastWinners.length">
      <thead>
        <tr>
          <th>User</th>
          <th>Round</th>
          <th>Computer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({ winner, userGun, computerGun }, index) in lastWinners" :key="index">
          <td :class="winner === 'user' && 'colored'">{{ userGun }}</td>
          <td :class="winner === 'tie' && 'colored'">{{ statistic.length - index }}</td>
          <td :class="winner === 'computer' && 'colored'">{{ computerGun }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const Component = defineComponent({
  name: 'Table',
  props: {
    statistic: Array,
    lastWinners: Array,
  },
});

export default Component;
</script>

<style src="./table.scss" lang="scss" scoped></style>
