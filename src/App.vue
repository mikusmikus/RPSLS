<template>
  <H1 v-show="preGameAnimation" :class="preGameAnimation && 'HeadingAnimation'"
    >WELCOME, FRIEND!</H1
  >
  <div :class="preGameAnimation && 'animation'">
    <div class="container container-fluid">
      <Header :statistic="statistic" :names="names"> </Header>
      <div class="row center-xs">
        <div class="col-sm-4 col-xs-6">
          <Card>
            <Image :weapon="player" alt="spsls" :gameAnimation="gameAnimation" />
            <CardButtons :guns="guns" />
            <template v-slot:footer>
              <Button
                v-for="(gun, index) in guns"
                :key="index"
                @onClick="handleGameAction(gun, index)"
                :disabled="disabled"
                buttonClass="button"
                :gun="gun"
              >
                <Icon>
                  {{ icons[index] }}
                </Icon>
              </Button>
            </template>
          </Card>
        </div>
        <div class="col-sm-4 col-xs-6 last-xs">
          <Card cardClass="card--result">
            <Button v-if="statistic.length" @onClick="handleRestart" buttonClass="restart"
              >Restart</Button
            >
            <Table :lastWinners="lastWinners" :statistic="statistic" v-if="statistic.length" />
            <H1 v-else>
              rock, paper, scissors, lizard, spock game!
            </H1>
            <template v-slot:footer>
              <H1 v-show="statistic.length">
                {{ lastWinnerText }}
              </H1>
            </template>
          </Card>
        </div>
        <div class="col-sm-4 col-xs-6 last-sm">
          <Card class="card">
            <Image :weapon="computer" alt="computer" :gameAnimation="gameAnimation" />
            <template v-slot:footer>
              <H2>AI COMPUTER!</H2>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Data, Statistic } from './types/types';
import findComputerIndex from './helper/computerAI';
import {
  Button, Image, Header, Table, Card, Icon, H2, H1,
} from './components';
import {
  results, guns, icons, names,
} from './data';

const Component = defineComponent({
  components: {
    Header,
    Button,
    Table,
    Image,
    Card,
    Icon,
    H2,
    H1,
  },
  data(): Data {
    return {
      guns,
      names,
      icons,
      winner: '',
      player: 'rpsls',
      computer: 'computer',
      statistic: [],
      disabled: false,
      gameAnimation: false,
      preGameAnimation: false,
    };
  },
  mounted() {
    const localStatistic = JSON.parse(localStorage.rpsls || '[]');
    if (!this.statistic.length) {
      this.statistic = localStatistic;
    }
    this.preGameAnimation = true;
    this.disabled = true;
    setTimeout(() => {
      this.preGameAnimation = false;
      this.disabled = false;
    }, 3000);
  },
  methods: {
    handleGameAction(gun: string, playerIndex: number) {
      this.gameAnimation = true;
      this.disabled = true;
      const computerIndex = findComputerIndex(this.statistic);
      setTimeout(() => {
        this.computer = this.guns[computerIndex];
        this.player = gun;
      }, 500);
      setTimeout(() => {
        this.winner = results[playerIndex][computerIndex];
        this.handleStatistic(this.winner, this.player, this.computer);
        this.gameAnimation = false;
        this.disabled = false;
      }, 1500);
    },
    handleStatistic(winner: string, userGun: string, computerGun: string) {
      const lastGame = { winner, userGun, computerGun };
      this.statistic.push(lastGame);
      const localStatistic = JSON.parse(localStorage.rpsls || '[]');
      localStatistic.push(lastGame);
      localStorage.rpsls = JSON.stringify(localStatistic);
    },
    handleRestart() {
      this.statistic.splice(0, this.statistic.length);
      this.player = 'rpsls';
      this.computer = 'computer';
      localStorage.rpsls = JSON.stringify([]);
    },
  },
  computed: {
    lastWinners(): Statistic[] {
      return this.statistic.filter((_, index) => index >= this.statistic.length - 5).reverse();
    },
    lastWinnerText(): string {
      if (this.winner === 'computer') {
        return 'You Lose!';
      }
      if (this.winner === 'user') {
        return 'You Win!';
      }
      return 'Tie Game!';
    },
  },
});

export default Component;
</script>

<style src="./styles/index.scss" lang="scss" scoped></style>
