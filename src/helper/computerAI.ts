import { random } from 'lodash';
import { Statistic } from '../types/types';
import { guns, results } from '../data';

const findComputerIndex = (statistic: Statistic[]) => {
  // izfiltrē usera ieročus

  const userGuns: string[] = statistic.map((item) => item.userGun);
  const userGunsCopy = [...userGuns];
  if (userGunsCopy.length < 2) {
    console.log(random(guns.length - 1));
    return random(guns.length - 1);
  }
  // sarindo pēc izmantotā biežuma usera ieročus
  const sortedGuns = userGuns.sort(
    (a, b) => userGuns.filter((v) => v === a).length - userGuns.filter((v) => v === b).length,
  );
  // console.log('sortedGuns', sortedGuns);

  // izdzēš dublikātus no masīva
  const removeDublicates = Array.from(new Set(sortedGuns));

  // paņem biežāk izmantoto ieroci
  const mostUsedGun = removeDublicates.pop();

  // paņem otro biežāk izmantoto ieroci
  const secondMostUsedGun = removeDublicates.pop();

  // atrod ieroča indexu biežāk izmantotajam ierocim.
  const MostUsedIndex: number = guns.findIndex((gun) => gun === mostUsedGun);
  // atrod ieroča indexu otram biežāk izmantotajam ierocim.
  const secondMostUsedIndex: number = guns.findIndex((gun) => gun === secondMostUsedGun);

  // no result masīva atrod indeksus ar ko var uzvarēt  biežāk izmantoto ieroci
  const CorrectMoveIndexArr = results[MostUsedIndex].map((e, i) => (e === 'computer' ? i : -1)).filter((element) => element > -1);
  if (secondMostUsedGun) {
    // no result masīva atrod indeksus ar ko var uzvarēt otro  biežāk izmantoto ieroci
    const SecondCorrectMoveIndexArr = results[secondMostUsedIndex]
      .map((e, i) => (e === 'computer' ? i : -1))
      .filter((element) => element > -1);

    const RandomNumber = random(10);

    // 80% atgriež ieroci, kas uzvar biežāk izmantoto user ieroci
    if (RandomNumber < 8) {
      return CorrectMoveIndexArr[random(1)];
    }
    // 20% atgriež ieroci, kas uzvar biežāk izmantoto user ieroci
    return SecondCorrectMoveIndexArr[random(1)];
  }

  return CorrectMoveIndexArr[random(1)];
};

export default findComputerIndex;
