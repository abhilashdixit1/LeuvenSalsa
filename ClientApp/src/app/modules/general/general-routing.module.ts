import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SeriesComponent } from "./components/series/series.component";
import { HomeComponent } from "./components/home/home.component";
import { LessonsComponent } from "./components/lessons/lessons.component";
import { LessonDetailsComponent } from "./components/lesson-details/lesson-details.component";
import { SeriesDetailsComponent } from "./components/series-details/series-details.component";

const routes: Routes = [
  { path: "classes", component: SeriesComponent },
  { path: "lessons", component: LessonsComponent },
  { path: "lessondetails/:id", component: LessonDetailsComponent },
  { path: "seriesdetails/:id", component: SeriesDetailsComponent },
  { path: "", component: HomeComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule {}
