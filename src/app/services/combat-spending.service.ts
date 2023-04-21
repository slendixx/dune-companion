import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CommitedTroop} from "../components/classes/commited-troop";
import {FactionService} from "./faction.service";
import {Faction} from "../interfaces/faction";

@Injectable({
  providedIn: 'root'
})
export class CombatSpendingService {

  private troops: CommitedTroop[] = [];
  private faction!: Faction;
  private spiceSpent: number = 0;
  private commitedTroops$: BehaviorSubject<CommitedTroop[]> = new BehaviorSubject<CommitedTroop[]>([]);
  private spiceSpent$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private commitedTroopAmount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private commitedSpecialTroopAmount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private totalCommitedTroopAmount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private factionService: FactionService
  ) {
    factionService.getFaction().subscribe(
      value => this.faction = value
    )
  }

  getCommitedTroops(): Observable<CommitedTroop[]> {
    return this.commitedTroops$.asObservable();
  }


  addTroop() {
    if (this.calculateTroopTypeAmount() >= this.faction.maxTroopAmount)
      return;

    this.troops.unshift(new CommitedTroop(
      false,
      false,
    ));
    this.commitedTroops$.next(this.troops);
    this.updateCommitedTroopAmounts();
  }

  removeTroop() {
    const nonSpecialTroops = this.troops.filter(
      troop => !troop.isSpecialTroop
    );
    if (nonSpecialTroops.length === 0)
      return;

    const removeIndex = nonSpecialTroops.length - 1;
    this.troops = this.troops.filter((value, i) => i !== removeIndex);
    this.commitedTroops$.next(this.troops);
    this.updateCommitedTroopAmounts();
  }

  addSpecialTroop() {
    if (this.calculateTroopTypeAmount(true) >= this.faction.maxSpecialTroopAmount)
      return;

    this.troops.push(new CommitedTroop(
      false,
      true,
    ));
    this.commitedTroops$.next(this.troops);
    this.updateCommitedTroopAmounts();
  }

  removeSpecialTroop() {
    const nonSpecialTroops = this.troops.filter(
      troop => !troop.isSpecialTroop
    );
    const specialTroops = this.troops.filter(
      troop => troop.isSpecialTroop
    );
    if (specialTroops.length === 0)
      return;

    const removeIndex = nonSpecialTroops.length + (specialTroops.length - 1);
    this.troops = this.troops.filter((value, i) => i !== removeIndex);

    this.commitedTroops$.next(this.troops);
    this.updateCommitedTroopAmounts();
  }

  getSpiceSpent() {
    return this.spiceSpent$.asObservable();
  }

  toggleSpiceSupport(clickedIndex: number) {
    this.troops.forEach((troop, index) => {
      if (index === clickedIndex)
        troop.hasSpiceSupport = !troop.hasSpiceSupport;
    });

    this.updateCommitedTroops();
    this.updateSpiceSpent();
  }

  calculateSpiceSpent() {
    return this.troops
      .filter(troop => troop.hasSpiceSupport)
      .length;
  }

  //clear spice
  updateCommitedTroopAmounts() {
    const commitedTroopAmount = this.calculateTroopTypeAmount();
    this.commitedTroopAmount$.next(commitedTroopAmount);

    const commitedSpecialTroopAmount = this.calculateTroopTypeAmount(true)
    this.commitedSpecialTroopAmount$.next(commitedSpecialTroopAmount);

    this.totalCommitedTroopAmount$.next(commitedTroopAmount + commitedSpecialTroopAmount);
  }

  getCommitedTroopAmount() {
    return this.commitedTroopAmount$.asObservable();
  }

  getCommitedSpecialTroopAmount() {
    return this.commitedSpecialTroopAmount$.asObservable();
  }

  getTotalCommitedTroopAmount() {
    return this.totalCommitedTroopAmount$.asObservable();
  }


  clear() {
    this.troops = [];
    this.spiceSpent = 0;
    this.updateCommitedTroopAmounts();
    this.updateSpiceSpent();
    this.updateCommitedTroops();
  }

  //update spice spent

  private updateSpiceSpent() {
    this.spiceSpent = this.calculateSpiceSpent();
    this.spiceSpent$.next(this.spiceSpent);
  }

  private updateCommitedTroops() {
    this.commitedTroops$.next(this.troops);
  }

  private calculateTroopTypeAmount(isSpecial: boolean = false) {
    return this.troops.filter(
      troop => troop.isSpecialTroop === isSpecial
    ).length;
  }

}
