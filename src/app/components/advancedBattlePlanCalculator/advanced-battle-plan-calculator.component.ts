import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FactionService} from "../../services/faction.service";
import {Faction} from "../../interfaces/faction";
import {Observable} from "rxjs";
import {CalculatorTroopRow} from "../classes/calculator-troop-row";

@Component({
  selector: 'app-plan-batalla-avanzado',
  templateUrl: './advanced-battle-plan-calculator.component.html',
  styleUrls: ['./advanced-battle-plan-calculator.component.scss']
})
export class AdvancedBattlePlanCalculator implements OnInit{
  constructor(
    private snackBar: MatSnackBar,
    private factionService: FactionService,
  ) {
  }

  faction$!: Observable<Faction>;
  faction!: Faction;
  troops: CalculatorTroopRow[] = [];
  combatWheelDial: number = 0;
  spiceSpent: number = 0;
  commitedTroops: number = 0;
  commitedSpecialTroops: number = 0;

  ngOnInit(): void {
    this.faction$ = this.factionService.getFaction();
    this.faction$.subscribe(
      value => this.faction = value
    );
    this.updateWheelDial();
    // this.snackBar.open(
    //   `Poder: ${this.calculateBattleWheelDial()} - Especia Gastada: ${0}`
    // );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message);
  }


  handleAddTroop() {
    this.troops.unshift(new CalculatorTroopRow(
      false,
      true,
      false,
    ));
    this.updateWheelDial();
    this.updateCommitedTroops();
  }
  handleRemoveTroop() {
    const nonSpecialTroops = this.troops.filter(
      troop => !troop.isSpecialTroop
    );
    if(nonSpecialTroops.length === 0)
      return;

    const removeIndex = nonSpecialTroops.length - 1;
    this.troops = this.troops.filter((value, i) => i !==removeIndex);

    this.updateWheelDial();
    this.updateCommitedTroops();
  }
  handleAddSpecialTroop() {
    this.troops.push(new CalculatorTroopRow(
      false,
      true,
      true,
    ));

    this.updateWheelDial();
    this.updateCommitedTroops();
  }
  handleRemoveSpecialTroop() {
    const nonSpecialTroops = this.troops.filter(
      troop => !troop.isSpecialTroop
    );
    const specialTroops = this.troops.filter(
      troop => troop.isSpecialTroop
    );
    if(specialTroops.length === 0)
      return;

    const removeIndex = nonSpecialTroops.length + (specialTroops.length - 1);
    this.troops = this.troops.filter((value, i) => i !==removeIndex);

    this.updateWheelDial();
    this.updateCommitedTroops();
  }

  updateWheelDial(){
    this.combatWheelDial = this.calculateBattleWheelDial();
  }
  calculateTroopPower(troop: CalculatorTroopRow): number {
    if(!this.faction.troopsRequireSpiceSupport){
      return troop.isSpecialTroop ? 2 : 1;
    }

    if(troop.isSpecialTroop)
      return troop.hasSpiceSupport ? 2 : 1;
    else
      return troop.hasSpiceSupport ? 1 : 0.5;
  }
  updateCommitedTroops(){
      this.commitedTroops = this.calculateCommitedTroops();
    this.commitedSpecialTroops = this.calculateCommitedSpecialTroops();
  }
  private updateSpiceSpent() {
    this.spiceSpent = this.calculateSpiceSpent();
  }
  calculateCommitedTroops(){
    return this.troops
      .filter(troop => !troop.isSpecialTroop)
      .length;
  }
  calculateCommitedSpecialTroops(){
    return this.troops
      .filter(troop => troop.isSpecialTroop)
      .length;
  }
  calculateSpiceSpent(){
    return this.troops
      .filter(troop => troop.hasSpiceSupport)
      .length;
  }

  handleToggleSpiceSupport(clickedIndex: number) {
    this.troops.forEach((troop,index) => {
      if(index === clickedIndex)
        troop.hasSpiceSupport = !troop.hasSpiceSupport;
    })
    this.combatWheelDial = this.calculateBattleWheelDial();
    this.updateSpiceSpent();
  }
  calculateBattleWheelDial():number {
    return this.troops.reduce(
      (previousValue,currentValue)=>{
        return previousValue + this.calculateTroopPower(currentValue);
      }, 0);
  }

}
