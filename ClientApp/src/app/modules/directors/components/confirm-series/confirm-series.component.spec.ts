import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ConfirmSeriesComponent } from "./confirm-series.component";

describe("ConfirmSeriesComponent", () => {
  let component: ConfirmSeriesComponent;
  let fixture: ComponentFixture<ConfirmSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmSeriesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
