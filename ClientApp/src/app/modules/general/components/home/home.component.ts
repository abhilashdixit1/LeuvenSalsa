import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  videos;

  constructor() {
    this.videos = [
      {
        title: "Salsa LA Style",
        src: "assets/salsaLa.mp4"
      },
      {
        title: "Bachata",
        src: "assets/bachata.mp4"
      },
      {
        title: "Tango",
        src: "assets/tango.mp4"
      }
    ];
  }

  ngOnInit() {}
}
