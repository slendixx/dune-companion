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
      leaders: [
        {
          name: 'Lady Jessica',
          power: 5,
        },
        {
          name: 'Thufir Hawat',
          power: 5,
        },
        {
          name: 'Gurney halleck',
          power: 4,
        },
        {
          name: 'Duncan Idaho',
          power: 2,
        },
        {
          name: 'Dr. Wellington Yueh',
          power: 1,
        },
      ]
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
      leaders: [
        {
          name: 'Feyd Rautha',
          power: 6,
        },
        {
          name: 'Beast Rabban',
          power: 4,
        },
        {
          name: 'Piter de Vries',
          power: 3,
        },
        {
          name: 'Captain Iakin Nefud',
          power: 2,
        },
        {
          name: 'Umman Kudu',
          power: 1,
        },
      ]
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
      leaders: [
        {
          name: 'Stilgar',
          power: 7,
        },
        {
          name: 'Chani',
          power: 6,
        },
        {
          name: 'Otheym',
          power: 5,
        },
        {
          name: 'Shadout Mapes',
          power: 3,
        },
        {
          name: 'Jamis',
          power: 2,
        },
      ]
    },
    {
      name: "Emperador",
      hasSpecialTroops: true,
      factionIconSrc: "assets/images/emperor-logo.svg",
      troopIconSrc: "assets/images/emperor-troops.svg",
      specialTroopIconSrc: "assets/images/sardaukar.svg",
      troopsRequireSpiceSupport: true,
      maxTroopAmount: 15,
      maxSpecialTroopAmount: 5,
      leaders: [
        {
          name: 'Hasimir Fenring',
          power: 6,
        },
        {
          name: 'Captain Aramsham',
          power: 5,
        },
        {
          name: 'Caid',
          power: 3,
        },
        {
          name: 'Burseg',
          power: 3,
        },
        {
          name: 'Bashar',
          power: 2,
        },
      ]
    },
    {
      name: "Gremio de Navegantes",
      hasSpecialTroops: false,
      factionIconSrc: "assets/images/guild-logo.svg",
      troopIconSrc: "assets/images/guild-troops.svg",
      specialTroopIconSrc: "",
      troopsRequireSpiceSupport: true,
      maxTroopAmount: 20,
      maxSpecialTroopAmount: 0,
      leaders: [
        {
          name: 'Staban Tuek',
          power: 5,
        },
        {
          name: 'Master Bewt',
          power: 3,
        },
        {
          name: 'Esmar Tuek',
          power: 3,
        },
        {
          name: 'Soo-Soo Sook',
          power: 2,
        },
        {
          name: 'Guild Rep.',
          power: 1,
        },
      ]
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
      leaders: [
        {
          name: 'Alia',
          power: 5,
        },
        {
          name: 'Margot Lady Fenring',
          power: 5,
        },
        {
          name: 'Mother Ramallo',
          power: 5,
        },
        {
          name: 'Princess Irulan',
          power: 5,
        },
        {
          name: 'Wanna Yueh',
          power: 5,
        },
      ]
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
