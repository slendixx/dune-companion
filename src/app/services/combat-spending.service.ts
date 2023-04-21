import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {CommitedTroop} from "../components/classes/commited-troop";

@Injectable({
  providedIn: 'root'
})
export class CombatSpendingService {

  troops: CommitedTroop[] = [];
  spiceSpent: number = 0;
  private commitedTroops$: BehaviorSubject<CommitedTroop[]> = new BehaviorSubject<CommitedTroop[]>([]);
  private spiceSpent$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private commitedTroopAmount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private commitedSpecialTroopAmount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private totalCommitedTroopAmount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
  }

  getCommitedTroops(): Observable<CommitedTroop[]> {
    return this.commitedTroops$.asObservable();
  }

  updateCommitedTroops() {
    this.commitedTroops$.next(this.troops);
  }

  addTroop() {
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
    const commitedTroopAmount = this.calculateCommitedTroops();
    this.commitedTroopAmount$.next(commitedTroopAmount);

    const commitedSpecialTroopAmount = this.calculateCommitedSpecialTroops();
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

  calculateCommitedTroops() {
    return this.troops
      .filter(troop => !troop.isSpecialTroop)
      .length;

  }

  calculateCommitedSpecialTroops() {
    return this.troops
      .filter(troop => troop.isSpecialTroop)
      .length;
  }

  clear() {
    this.troops = [];
    this.spiceSpent = 0;
    this.updateCommitedTroopAmounts();
    this.updateSpiceSpent();
    this.updateCommitedTroops();
  }

  //private methods
  //update troops
  //update spice spent

  private updateSpiceSpent() {
    this.spiceSpent = this.calculateSpiceSpent();
    this.spiceSpent$.next(this.spiceSpent);
  }

}
