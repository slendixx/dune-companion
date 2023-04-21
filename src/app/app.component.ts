import {Component, HostBinding, OnInit} from '@angular/core';
import {ThemesService} from "./services/themes.service";
import {OverlayContainer} from "@angular/cdk/overlay";
import {FactionService} from "./services/faction.service";
import {Theme} from "./interfaces/theme";
import {CombatSpendingService} from "./services/combat-spending.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostBinding('class') hostCssClass: any;
  menuOpened: boolean = false;
  navOptions = [
    {
      label: 'Calculadora de Plan de Batalla Avanzado',
      href: 'advanced-battle-plan-calculator',
    },
    // {
    //   label: 'Información de Facción',
    //   href: 'faction-info',
    // },
  ]
  themeOptions: Theme[] = [];

  constructor(
    public overlayContainer: OverlayContainer,
    public themesService: ThemesService,
    private factionService: FactionService,
    private combatSpendingService: CombatSpendingService,
  ) {
  }

  ngOnInit(): void {
    this.themeOptions = this.themesService.getThemes();
    this.hostCssClass = this.themeOptions[0].CSSThemeClass;
  }

  handleThemeChange(theme: Theme) {
    this.overlayContainer.getContainerElement().classList.add(theme.CSSThemeClass);
    this.hostCssClass = theme.CSSThemeClass;
    //select faction globally
    this.factionService.setFaction(theme.name);
    //close the drawer menu
    this.handleMenuClosed();
    this.combatSpendingService.clear();
  }


  handleMenuOpened() {
    this.menuOpened = true;
  }

  handleMenuClosed() {
    this.menuOpened = false;
  }

}
