import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateSeriesComponent } from "./components/create-series/create-series.component";
import { ConfirmSeriesComponent } from "./components/confirm-series/confirm-series.component";
import { AuthorizeGuard } from "../api-authorization/authorize.guard";

const routes: Routes = [
  {
    path: "createSeries",
    component: CreateSeriesComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path: "confirmSeries",
    component: ConfirmSeriesComponent,
    canActivate: [AuthorizeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorsRoutingModule {}
