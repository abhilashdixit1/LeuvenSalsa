import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DirectorsRoutingModule } from "./directors-routing.module";
import { CreateSeriesComponent } from "./components/create-series/create-series.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";

import { SeriesService } from "./services/series.service";
import { ConfirmSeriesComponent } from "./components/confirm-series/confirm-series.component";

@NgModule({
  declarations: [CreateSeriesComponent, ConfirmSeriesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    DirectorsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [SeriesService]
})
export class DirectorsModule {}
