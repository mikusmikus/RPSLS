export type Statistic = {
  winner: string;
  userGun: string;
  computerGun: string;
};

export type Data = {
  names: string[];
  guns: string[];
  icons: string[];
  statistic: Statistic[];
  player: string;
  computer: string;
  winner: string;
  preGameAnimation: boolean;
  disabled: boolean;
  gameAnimation: boolean;
};
