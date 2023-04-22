import {Component, OnInit} from '@angular/core';
import {ThemesService} from "../../services/themes.service";
import {Theme} from "../../interfaces/theme";
import {FactionService} from "../../services/faction.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  themeOptions!: Theme[];

  constructor(
    private themesService: ThemesService,
    private factionService: FactionService,
  ) {
  }

  ngOnInit(): void {
    this.themeOptions = this.themesService.getThemes()
  }

  handleThemeChange(theme: Theme) {
    //select theme globally
    this.themesService.setCurrentTheme(theme);
    //select faction globally
    this.factionService.setFaction(theme.name);
  }
}
