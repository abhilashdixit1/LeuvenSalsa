import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { SeriesComponent } from "./components/series/series.component";
import { GeneralRoutingModule } from "./general-routing.module";
import { LevelPipe } from "./pipes/level.pipe";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./components/home/home.component";
import { LessonsComponent } from "./components/lessons/lessons.component";
import { SeriesDetailsComponent } from "./components/series-details/series-details.component";
import { LessonDetailsComponent } from "./components/lesson-details/lesson-details.component";

@NgModule({
  declarations: [
    SeriesComponent,
    LevelPipe,
    HomeComponent,
    LessonsComponent,
    SeriesDetailsComponent,
    LessonDetailsComponent
  ],
  imports: [CommonModule, GeneralRoutingModule, FormsModule, NgbModule]
})
export class GeneralModule {}
