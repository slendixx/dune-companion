import { Injectable} from '@angular/core';
import {Theme} from "../interfaces/theme";

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private themes:Theme[] = [
    {
      name:'Atreides',
      CSSThemeClass:'atreides-theme-dark',
      factionLogoSrc: 'assets/images/atreides-logo.svg'
    },
    {
      name:'Harkonnen',
      CSSThemeClass:'harkonnen-theme-dark',
      factionLogoSrc: 'assets/images/harkonnen-logo.svg'
    },
    {
      name:'Fremen',
      CSSThemeClass:'fremen-theme-dark',
      factionLogoSrc: 'assets/images/fremen-logo.svg'
    },
    {
      name:'Emperor',
      CSSThemeClass:'emperor-theme-dark',
      factionLogoSrc: 'assets/images/emperor-logo.svg'
    },
    {
      name:'Guild',
      CSSThemeClass:'guild-theme-dark',
      factionLogoSrc: 'assets/images/guild-logo.svg'
    },
    {
      name:'Bene-Gesserit',
      CSSThemeClass:'bene-gesserit-theme-dark',
      factionLogoSrc: 'assets/images/bene-gesserit-logo.svg'
    },
  ]
  getThemes(){
    return this.themes;
  }

}
