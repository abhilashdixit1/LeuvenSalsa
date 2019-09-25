import { Component, OnInit } from "@angular/core";
import { Class } from "../../interfaces/Class";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ClassesService } from "../../services/classes.service";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-lesson-details",
  templateUrl: "./lesson-details.component.html",
  styleUrls: ["./lesson-details.component.scss"]
})
export class LessonDetailsComponent implements OnInit {
  class: Class;

  constructor(
    private classesService: ClassesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");

    this.classesService.getLesson(id).subscribe(c => {
      this.class = c;
    });
  }
}
