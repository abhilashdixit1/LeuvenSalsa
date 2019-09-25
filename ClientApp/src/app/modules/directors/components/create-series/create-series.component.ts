import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { NgbTimepickerConfig } from "@ng-bootstrap/ng-bootstrap";
import { SeriesForm } from "../../interfaces/CreateSeries";
import { SeriesService } from "../../services/series.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { Room } from "src/app/modules/general/interfaces/Room";
import { Level } from "src/app/modules/general/interfaces/Level";
import { Teacher } from "../../../general/interfaces/Teacher";

@Component({
  selector: "app-create-series",
  templateUrl: "./create-series.component.html",
  styleUrls: ["./create-series.component.scss"]
})
export class CreateSeriesComponent implements OnInit {
  public myForm: SeriesForm;
  public roomOptions: Room[];
  public levelOptions: Level[];
  public styleOptions: string[];
  public teacherOptions: Teacher[];

  seriesForm = this.formbuilder.group({
    style: [""],
    level: [""],
    room: [""],
    teacher1: [""],
    teacher2: [""],
    startDate: [""],
    isPartnerwork: [true],
    startTime: [{ hour: 20, minute: 10 }],
    endTime: [{ hour: 21, minute: 20 }]
  });

  constructor(
    private _seriesService: SeriesService,
    private _router: Router,
    private formbuilder: FormBuilder,
    timepickerConfig: NgbTimepickerConfig
  ) {
    timepickerConfig.seconds = false;
    timepickerConfig.spinners = false;
  }

  ngOnInit() {
    this.getRooms();
    this.getLevels();
    this.getTeachers();
    this.styleOptions = [
      "Salsa LA Style",
      "Salsa Cubano",
      "Rueda De Casino",
      "Bachata",
      "Tango",
      "Samba De Gafieira",
      "Reggaeton"
    ];
  }

  public onSubmit(): void {
    this.myForm = this.seriesForm.value;
    this._seriesService.setSeriesForm(this.seriesForm.value);
    this._router.navigate(["directors/confirmSeries"]);
  }

  getRooms(): void {
    this._seriesService.getRooms().subscribe(data => {
      this.roomOptions = data;
    });
  }

  getLevels(): void {
    this._seriesService.getLevels().subscribe(data => {
      this.levelOptions = data;
    });
  }

  getTeachers(): void {
    this._seriesService.getTeachers().subscribe(data => {
      this.teacherOptions = data;
    });
  }

  searchStyle = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(() => this.styleOptions)
    );
}
