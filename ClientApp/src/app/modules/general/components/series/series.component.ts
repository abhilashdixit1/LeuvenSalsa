import { Component, OnInit } from "@angular/core";
import { ClassesService } from "../../services/classes.service";
import { Class } from "../../interfaces/Class";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-classes",
  templateUrl: "./series.component.html",
  styleUrls: ["./series.component.scss"]
})
export class SeriesComponent implements OnInit {
  constructor(private classesService: ClassesService) {}

  classes: Class[];
  filteredClasses: Class[];

  _selectedDay: string;
  get selectedDay(): string {
    return this._selectedDay;
  }
  set selectedDay(value: string) {
    this._selectedDay = value;
    this.filteredClasses = this.filter();
  }

  _selectedStyle: string;
  get selectedStyle(): string {
    return this._selectedStyle;
  }
  set selectedStyle(value: string) {
    this._selectedStyle = value;
    this.filteredClasses = this.filter();
  }

  _selectedLevel: number;
  get selectedLevel(): number {
    return this._selectedLevel;
  }
  set selectedLevel(value: number) {
    this._selectedLevel = value;
    this.filteredClasses = this.filter();
  }

  levels: number[];
  days: string[];
  styles: string[];

  private daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  ngOnInit() {
    this.classesService.getSeries().subscribe(c => {
      this.classes = c;
      this.initializeFilters();
      this.filteredClasses = this.filter();
    });
  }

  private initializeFilters() {
    // filter comboboxes
    this.levels = Array.from(new Set(this.classes.map(a => a.level))).sort();
    this.days = Array.from(
      new Set(this.classes.map(a => new Date(a.startDate).getDay()))
    )
      .sort()
      .map(a => this.daysOfWeek[a - 1]);
    this.styles = Array.from(new Set(this.classes.map(a => a.style))).sort();

    // default values
    this.levels.unshift(-1);
    this.days.unshift("All days");
    this.styles.unshift("All styles");

    this.selectedLevel = -1;
    this.selectedStyle = "All styles";
    this.selectedDay = "All days";
  }

  private filter() {
    return this.classes
      .filter(
        a =>
          this.selectedDay === "All days" ||
          this.daysOfWeek[new Date(a.startDate).getDay() - 1] ===
            this.selectedDay
      )
      .filter(a => this.selectedLevel == -1 || a.level == this.selectedLevel)
      .filter(
        a =>
          this.selectedStyle === "All styles" || a.style === this.selectedStyle
      );
  }
}
