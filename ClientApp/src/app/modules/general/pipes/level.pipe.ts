import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "level" })
export class LevelPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 0:
        return "Beginners 1";
      case 100:
        return "Beginners 2";
      case 200:
        return "Improvers";
      case 300:
        return "Intermediate";
      case 400:
        return "Advanced";
      case 500:
        return "Team Training";
      case -1:
        return "Undefined";
      default:
        return "Open level";
    }
  }
}
