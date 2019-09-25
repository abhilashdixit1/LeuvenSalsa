import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { SeriesService } from "../../services/series.service";
import { FinalForm, LessonTeacher } from "../../interfaces/CreateSeries";
import { Room } from "src/app/modules/general/interfaces/Room";

@Component({
  selector: "app-confirm-series",
  templateUrl: "./confirm-series.component.html",
  styleUrls: ["./confirm-series.component.scss"]
})
export class ConfirmSeriesComponent implements OnInit {
  constructor(private fb: FormBuilder, private _seriesService: SeriesService) {}

  public endDate: Date;
  public roomOptions: Room[];
  public seriesForm: FormGroup;

  ngOnInit() {
    this.getRooms();

    var date = this._seriesService.getSeriesForm().startDate;
    this.endDate = new Date(date.year, date.month - 1, date.day);

    this.seriesForm = this.fb.group({
      lessons: this.fb.array([])
    });

    for (let i = 0; i < 10; i++) {
      this.addAClass();
      this.increaseEndDate();
    }
  }

  private addAClass() {
    this.lessons.push(
      this.fb.group({
        date: this.convertToDateStruct(this.endDate),
        start: this._seriesService.getSeriesForm().startTime,
        end: this._seriesService.getSeriesForm().endTime,
        room: this._seriesService.getSeriesForm().room
      })
    );
  }

  private increaseEndDate() {
    this.endDate.setDate(this.endDate.getDate() + 7);
  }

  private convertToDateStruct(date: Date): Object {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  private getRooms(): void {
    this._seriesService.getRooms().subscribe(data => {
      this.roomOptions = data;
    });
  }

  get lessons() {
    return this.seriesForm.get("lessons") as FormArray;
  }

  deleteClass(index) {
    this.lessons.removeAt(index);
  }

  addNewClass() {
    this.addAClass();
    this.increaseEndDate();
  }

  confirm() {
    var result = this.compileResult();
    this._seriesService.createSeries(result).subscribe();
  }

  private compileResult(): FinalForm {
    const result: FinalForm = {
      lessons: []
    };

    const lessonTeachers: LessonTeacher[] = [];

    var teacher1 = this._seriesService.getSeriesForm().teacher1;
    if (teacher1) {
      lessonTeachers.push({
        userId: teacher1
      });
    }

    var teacher2 = this._seriesService.getSeriesForm().teacher2;
    if (teacher2) {
      lessonTeachers.push({
        userId: teacher2
      });
    }

    var createdlessons = this.seriesForm.controls.lessons.value;
    createdlessons.forEach(x =>
      result.lessons.push({
        start: new Date(
          x.date.year,
          x.date.month - 1,
          x.date.day,
          x.start.hour,
          x.start.minute
        ),
        end: new Date(
          x.date.year,
          x.date.month - 1,
          x.date.day,
          x.end.hour,
          x.end.minute
        ),
        roomId: +x.room,
        isPartnerwork: this._seriesService.getSeriesForm().isPartnerwork,
        style: this._seriesService.getSeriesForm().style,
        levelId: +this._seriesService.getSeriesForm().level,
        teachers: lessonTeachers
      })
    );

    return result;
  }
}
