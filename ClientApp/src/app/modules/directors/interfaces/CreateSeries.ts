import { Time } from "@angular/common";

export interface Lesson {
  start: Date;
  end: Date;
  isPartnerwork: boolean;
  levelId: number;
  style: string;
  roomId: number;
  teachers: LessonTeacher[];
}

export interface LessonTeacher {
  userId: string;
}

export interface series {
  lessons: Lesson[];
}

export interface SeriesForm {
  style: string;
  levelId: number;
  roomId: number;
  startDate: Date;
  isPartnerwork: boolean;
  startTime: Time;
  endTime: Time;
}

export interface FinalForm {
  lessons: Lesson[];
}
