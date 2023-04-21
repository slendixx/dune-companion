import {Injectable} from '@angular/core';
import {CombatSpendingService} from "./combat-spending.service";
import {BehaviorSubject, Observable} from "rxjs";
import {CommitedTroop} from "../components/classes/commited-troop";
import {FactionService} from "./faction.service";
import {Faction} from "../interfaces/faction";

@Injectable({
  providedIn: 'root'
})
export class CombatWheelDialService {
  private combatWheelDial$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private faction$!: Observable<Faction>;
  private faction!: Faction;


  constructor(
    private combatSpendingService: CombatSpendingService,
    private factionService: FactionService,
  ) {

    this.faction$ = this.factionService.getFaction();
    this.faction$.subscribe(
      value => this.faction = value
    );

    combatSpendingService.getCommitedTroops().subscribe(
      troops => {

        const value = this.calculateBattleWheelDial(troops);

        this.combatWheelDial$.next(value);
      }
    )
  }

  getCombatWheelDial(): BehaviorSubject<number> {
    return this.combatWheelDial$;
  }

  private calculateBattleWheelDial(troops: CommitedTroop[]): number {
    return troops.reduce(
      (previousValue, currentValue) => {
        return previousValue + this.calculateTroopPower(currentValue);
      }, 0);
  }

  private calculateTroopPower(troop: CommitedTroop): number {
    if (!this.faction.troopsRequireSpiceSupport) {
      return troop.isSpecialTroop ? 2 : 1;
    }

    if (troop.isSpecialTroop)
      return troop.hasSpiceSupport ? 2 : 1;
    else
      return troop.hasSpiceSupport ? 1 : 0.5;
  }
}
