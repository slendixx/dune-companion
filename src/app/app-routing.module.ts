import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdvancedBattlePlanCalculator} from "./components/advancedBattlePlanCalculator/advanced-battle-plan-calculator.component";
import {FactionSelectComponent} from "./components/faction-select/faction-select.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  // { path: 'faction-select', component: FactionSelectComponent },
  { path: '', component: HomeComponent },
  { path: 'advanced-battle-plan-calculator', component: AdvancedBattlePlanCalculator },
  // { path: 'faction-info', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
