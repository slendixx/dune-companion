import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FactionService} from "../../services/faction.service";
import {Faction} from "../../interfaces/faction";
import {Observable} from "rxjs";
import {CommitedTroop} from "../classes/commited-troop";
import {CombatSpendingService} from "../../services/combat-spending.service";
import {CombatWheelDialService} from "../../services/combat-wheel-dial.service";

@Component({
  selector: 'app-plan-batalla-avanzado',
  templateUrl: './advanced-battle-plan-calculator.component.html',
  styleUrls: ['./advanced-battle-plan-calculator.component.scss']
})
export class AdvancedBattlePlanCalculator implements OnInit {
  faction$!: Observable<Faction>;
  faction!: Faction;
  troops$!: Observable<CommitedTroop[]>;
  troops: CommitedTroop[] = [];
  spiceSpent$!: Observable<number>;
  commitedTroopAmount$!: Observable<number>;
  commitedTroopAmount: number = 0;
  commitedSpecialTroopAmount$!: Observable<number>;
  commitedSpecialTroopAmount: number = 0;
  totalCommitedSpecialTroopAmount$!: Observable<number>;
  combatWheelDial$!: Observable<number>;
  combatWheelDial: number = 0;


  constructor(
    private snackBar: MatSnackBar,
    private factionService: FactionService,
    private combatSpendingService: CombatSpendingService,
    private combatWheelDialService: CombatWheelDialService,
  ) {
  }

  ngOnInit(): void {
    this.faction$ = this.factionService.getFaction();
    this.faction$.subscribe(
      value => this.faction = value
    );
    this.troops$ = this.combatSpendingService.getCommitedTroops();
    this.spiceSpent$ = this.combatSpendingService.getSpiceSpent();
    this.commitedTroopAmount$ = this.combatSpendingService.getCommitedTroopAmount();
    this.commitedTroopAmount$.subscribe(
      value => this.commitedTroopAmount = value
    );
    this.commitedSpecialTroopAmount$ = this.combatSpendingService.getCommitedSpecialTroopAmount();
    this.commitedSpecialTroopAmount$.subscribe(
      value => this.commitedSpecialTroopAmount = value
    );
    this.totalCommitedSpecialTroopAmount$ = this.combatSpendingService.getTotalCommitedTroopAmount();

    this.combatWheelDialService.getCombatWheelDial().subscribe(
      value => this.combatWheelDial = value
    )
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }


  handleAddTroop() {
    this.combatSpendingService.addTroop();
    // this.updateWheelDial();
  }

  handleRemoveTroop() {
    this.combatSpendingService.removeTroop()
  }

  handleAddSpecialTroop() {
    this.combatSpendingService.addSpecialTroop();
  }

  handleRemoveSpecialTroop() {
    this.combatSpendingService.removeSpecialTroop();
  }

  //TODO refactor duplication of this method
  calculateTroopPower(troop: CommitedTroop): number {
    if (!this.faction.troopsRequireSpiceSupport) {
      return troop.isSpecialTroop ? 2 : 1;
    }

    if (troop.isSpecialTroop)
      return troop.hasSpiceSupport ? 2 : 1;
    else
      return troop.hasSpiceSupport ? 1 : 0.5;
  }


  handleToggleSpiceSupport(clickedIndex: number) {
    this.combatSpendingService.toggleSpiceSupport(clickedIndex);
  }

}
