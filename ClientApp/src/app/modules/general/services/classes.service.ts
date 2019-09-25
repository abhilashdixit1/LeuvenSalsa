import { Injectable, Inject } from "@angular/core";
import { Class } from "../interfaces/Class";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ClassesService {
  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string
  ) {}

  getSeries(): Observable<Class[]> {
    return this.http
      .get<Class[]>("api/Series/")
      .pipe(
        catchError((e: HttpErrorResponse) =>
          Observable.throw(this.errorHandler(e))
        )
      );
  }

  getIndividualClasses(): Observable<Class[]> {
    return this.http
      .get<Class[]>("api/Lessons/")
      .pipe(
        catchError((e: HttpErrorResponse) =>
          Observable.throw(this.errorHandler(e))
        )
      );
  }

  getLesson(id: string): Observable<Class> {
    return this.http
      .get<Class>("api/Lessons/" + id)
      .pipe(
        catchError((e: HttpErrorResponse) =>
          Observable.throw(this.errorHandler(e))
        )
      );
  }

  private errorHandler(error: HttpErrorResponse): void {
    console.log(error);
  }
}
