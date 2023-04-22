import {Injectable} from '@angular/core';
import {Theme} from "../interfaces/theme";
import {BehaviorSubject, Observable} from "rxjs";
import {CombatSpendingService} from "./combat-spending.service";

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private themes: Theme[] = [
    {
      name: 'Atreides',
      CSSThemeClass: 'atreides-theme-dark',
      factionLogoSrc: 'assets/images/atreides-logo.svg'
    },
    {
      name: 'Harkonnen',
      CSSThemeClass: 'harkonnen-theme-dark',
      factionLogoSrc: 'assets/images/harkonnen-logo.svg'
    },
    {
      name: 'Fremen',
      CSSThemeClass: 'fremen-theme-dark',
      factionLogoSrc: 'assets/images/fremen-logo.svg'
    },
    {
      name: 'Emperador',
      CSSThemeClass: 'emperor-theme-dark',
      factionLogoSrc: 'assets/images/emperor-logo.svg'
    },
    {
      name: 'Gremio de Navegantes',
      CSSThemeClass: 'guild-theme-dark',
      factionLogoSrc: 'assets/images/guild-logo.svg'
    },
    {
      name: 'Bene-Gesserit',
      CSSThemeClass: 'bene-gesserit-theme-dark',
      factionLogoSrc: 'assets/images/bene-gesserit-logo.svg'
    },
  ]
  private currentTheme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(this.themes[0]);

  constructor(
    private combatSpendingService: CombatSpendingService,
  ) {
  }

  getThemes() {
    return this.themes;
  }

  getCurrentTheme(): Observable<Theme> {
    return this.currentTheme$.asObservable();
  }

  setCurrentTheme(theme: Theme) {
    this.combatSpendingService.clear();
    this.currentTheme$.next(theme);
  }

}
