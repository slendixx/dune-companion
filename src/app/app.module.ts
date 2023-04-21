import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ThemesService} from "./services/themes.service";
import { AdvancedBattlePlanCalculator } from './components/advancedBattlePlanCalculator/advanced-battle-plan-calculator.component';
import { FactionSelectComponent } from './components/faction-select/faction-select.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NgOptimizedImage} from "@angular/common";
import { TroopsControlComponent } from './components/troops-control/troops-control.component';
import {FactionService} from "./services/faction.service";
import { CircleIcon } from './components/circle-icon/circle-icon';
import { FractionPipe } from './pipes/fraction.pipe';
import { CombatWheelDialPipe } from './pipes/combat-wheel-dial.pipe';
import {MatTooltipModule} from "@angular/material/tooltip";
import { CombatWheelComponent } from './components/combat-wheel/combat-wheel.component';
import { HomeComponent } from './components/home/home.component';
import {CombatSpendingService} from "./services/combat-spending.service";

@NgModule({
  declarations: [
    AppComponent,
    AdvancedBattlePlanCalculator,
    FactionSelectComponent,
    TroopsControlComponent,
    CircleIcon,
    FractionPipe,
    CombatWheelDialPipe,
    CombatWheelComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    NgOptimizedImage,
    MatTooltipModule
  ],
  providers: [
    ThemesService,
    MatSnackBar,
    FactionService,
    CombatSpendingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
