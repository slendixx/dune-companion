import {Component, HostBinding, OnInit} from '@angular/core';
import {ThemesService} from "./services/themes.service";
import {OverlayContainer} from "@angular/cdk/overlay";
import {FactionService} from "./services/faction.service";
import {Theme} from "./interfaces/theme";

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
    {
      label: 'Información de Facción',
      href: 'faction-info',
    },
  ]
  themeOptions: Theme[] = [];

  constructor(
    public overlayContainer: OverlayContainer,
    public themesService: ThemesService,
    private factionService: FactionService,
  ) {
  }

  ngOnInit(): void {
    this.themeOptions = this.themesService.getThemes();
    this.themesService.getCurrentTheme().subscribe(
      theme => {
        this.hostCssClass = theme.CSSThemeClass
        this.overlayContainer.getContainerElement().classList.add(theme.CSSThemeClass);
      }
    )
  }

  handleThemeChange(theme: Theme) {
    //select theme globally
    this.themesService.setCurrentTheme(theme);
    //select faction globally
    this.factionService.setFaction(theme.name);
    //close the drawer menu
    this.handleMenuClosed();
  }


  handleMenuOpened() {
    this.menuOpened = true;
  }

  handleMenuClosed() {
    this.menuOpened = false;
  }

}
