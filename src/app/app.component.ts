import {Component, HostBinding, OnInit} from '@angular/core';
import {ThemesService} from "./services/themes.service";
import {OverlayContainer} from "@angular/cdk/overlay";
import {FactionService} from "./services/faction.service";
import {Theme} from "./interfaces/theme";
import {MatIcon, MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

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
  themeOptions:Theme[] = [];

  constructor(
    public overlayContainer: OverlayContainer,
    public themesService:ThemesService,
    private factionService:FactionService,
    // private matIconRegistry:MatIconRegistry,
    // private domSanitizer: DomSanitizer
  ) {
    // this.matIconRegistry.addSvgIcon(
    //   `Atreides`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/images/atreides-logo.svg`)
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `Harkonnen`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/images/harkonnen-logo.svg`)
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `Emperor`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/images/fremen-logo.svg`)
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `Fremen`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/images/emperor-logo.svg`)
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `Guild`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/images/guild-logo.svg`)
    // );
    // this.matIconRegistry.addSvgIcon(
    //   `Bene-Gesserit`,
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/images/bene-gesserit-logo.svg`)
    // );
  }

  ngOnInit(): void {
      this.themeOptions = this.themesService.getThemes();
      this.hostCssClass = this.themeOptions[0];
    }

  handleThemeChange(theme:Theme) {
    this.overlayContainer.getContainerElement().classList.add(theme.CSSThemeClass);
    this.hostCssClass = theme.CSSThemeClass;
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
