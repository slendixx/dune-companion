import {Injectable} from '@angular/core';
import {Faction} from "../interfaces/faction";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FactionService {

  private factions: Faction[] = [
    {
      name: "Atreides",
      hasSpecialTroops: false,
      factionIconSrc: "assets/images/atreides-logo.svg",
      troopIconSrc: "assets/images/atreides-troops.svg",
      specialTroopIconSrc: "",
      troopsRequireSpiceSupport: true,
      maxTroopAmount: 20,
      maxSpecialTroopAmount: 0,
    },
    {
      name: "Harkonnen",
      hasSpecialTroops: false,
      factionIconSrc: "assets/images/harkonnen-logo.svg",
      troopIconSrc: "assets/images/harkonnen-troops.svg",
      specialTroopIconSrc: "",
      troopsRequireSpiceSupport: true,
      maxTroopAmount: 20,
      maxSpecialTroopAmount: 0,
    },
    {
      name: "Fremen",
      hasSpecialTroops: true,
      factionIconSrc: "assets/images/fremen-logo.svg",
      troopIconSrc: "assets/images/fremen-troops.svg",
      specialTroopIconSrc: "assets/images/fedaykin.svg",
      troopsRequireSpiceSupport: false,
      maxTroopAmount: 17,
      maxSpecialTroopAmount: 3,
    },
    {
      name: "Emperor",
      hasSpecialTroops: true,
      factionIconSrc: "assets/images/emperor-logo.svg",
      troopIconSrc: "assets/images/emperor-troops.svg",
      specialTroopIconSrc: "assets/images/sardaukar.svg",
      troopsRequireSpiceSupport: true,
      maxTroopAmount: 15,
      maxSpecialTroopAmount: 5,
    },
    {
      name: "Guild",
      hasSpecialTroops: false,
      factionIconSrc: "assets/images/guild-logo.svg",
      troopIconSrc: "assets/images/guild-troops.svg",
      specialTroopIconSrc: "",
      troopsRequireSpiceSupport: true,
      maxTroopAmount: 20,
      maxSpecialTroopAmount: 0,
    },
    {
      name: "Bene-Gesserit",
      hasSpecialTroops: false,
      factionIconSrc: "assets/images/bene-gesserit-logo.svg",
      troopIconSrc: "assets/images/bene-gesserit-troops.svg",
      specialTroopIconSrc: "",
      troopsRequireSpiceSupport: true,
      maxTroopAmount: 20,
      maxSpecialTroopAmount: 0,
    },
  ];

  private faction$: BehaviorSubject<Faction> = new BehaviorSubject<Faction>(this.factions[0]);

  constructor() {
  }

  getFaction() {
    return this.faction$.asObservable();
  }

  setFaction(factionName: string) {
    const faction = this.factions.find(
      (faction) => faction.name === factionName
    )
    if (!faction)
      return;

    this.faction$.next(faction)
  }
}
