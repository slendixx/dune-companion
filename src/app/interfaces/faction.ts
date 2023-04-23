import {Leader} from "./leader";

export interface Faction {
  hasSpecialTroops: boolean;
  name: string;
  troopIconSrc: string;
  specialTroopIconSrc: string;
  factionIconSrc: string;
  troopsRequireSpiceSupport: boolean;
  maxTroopAmount: number;
  maxSpecialTroopAmount: number;
  leaders: Leader[];
}
