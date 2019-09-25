import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../modules/general/general.module").then(m => m.GeneralModule)
  },
  {
    path: "students",
    loadChildren: () =>
      import("../modules/students/students.module").then(m => m.StudentsModule)
  },
  {
    path: "teachers",
    loadChildren: () =>
      import("../modules/teachers/teachers.module").then(m => m.TeachersModule)
  },
  {
    path: "directors",
    loadChildren: () =>
      import("../modules/directors/directors.module").then(
        m => m.DirectorsModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
