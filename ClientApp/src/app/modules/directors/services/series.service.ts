import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { FinalForm } from "../interfaces/CreateSeries";
import { Observable, throwError } from "rxjs";
import { Room } from "../../general/interfaces/Room";
import { Level } from "../../general/interfaces/Level";
import { catchError } from "rxjs/operators";
import { Teacher } from "../../general/interfaces/Teacher";

@Injectable({
  providedIn: "root"
})
export class SeriesService {
  constructor(private _http: HttpClient) {}

  public seriesForm;

  public getSeriesForm() {
    return this.seriesForm;
  }

  public setSeriesForm(sf: any) {
    this.seriesForm = sf;
  }

  getRooms() {
    return this._http.get<Room[]>("api/rooms");
  }

  getLevels() {
    return this._http.get<Level[]>("api/levels");
  }

  getTeachers() {
    return this._http.get<Teacher[]>("api/teachers");
  }

  createSeries(finalForm: FinalForm): Observable<FinalForm> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this._http
      .post<FinalForm>("api/series", finalForm, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError("Something bad happened; please try again later.");
  }
}
