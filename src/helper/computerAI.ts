import { random } from 'lodash';
import { Statistic } from '../types/types';
import { guns, results } from '../data';

const findComputerIndex = (statistic: Statistic[]) => {
  // izfiltrē usera ieročus
  const userGuns: string[] = statistic.map((item) => item.userGun);

  // sarindo pēc izmantotā biežuma usera ieročus
  const sortedGuns = userGuns.sort(
    (a, b) => userGuns.filter((v) => v === a).length - userGuns.filter((v) => v === b).length,
  );

  // izdzēš dublikātus no masīva
  const removeDublicates = Array.from(new Set(sortedGuns));

  // paņem biežāk izmantoto
  const mostUsedGun = removeDublicates.pop();

  // atrod ieroča indexu biežāk izmantotajam ierocim.
  const MostUsedIndex: number = guns.findIndex((gun) => gun === mostUsedGun);

  if (MostUsedIndex) {
    if (MostUsedIndex > -1) {
      // no result masīva atrod indeksus ar ko var uzvarēt  biežāk izmantoto ieroci
      const computerCorrectMoveIndexArr = results[MostUsedIndex].map((e, i) => (e === 'computer' ? i : '')).filter(String);
      // random atlasa vienu no 2 izmantotajiem ieročiem
      const index = computerCorrectMoveIndexArr[random(1)];

      if (index) {
        return index;
      }

      return random(guns.length - 1);
    }
    return random(guns.length - 1);
  }
  return random(guns.length - 1);
};

export default findComputerIndex;
