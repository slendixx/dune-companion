import {Component, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";
import {FactionService} from "../../services/faction.service";
import {Observable} from "rxjs";
import {Faction} from "../../interfaces/faction";

@Component({
  selector: 'app-faction-info',
  templateUrl: './faction-info.component.html',
  styleUrls: ['./faction-info.component.scss']
})
export class FactionInfoComponent implements OnInit {
  faction$!: Observable<Faction>;

  constructor(
    private viewportScroller: ViewportScroller,
    private factionService: FactionService,
  ) {
  }

  handleScrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  ngOnInit(): void {
    this.faction$ = this.factionService.getFaction();
  }
}
