import { Component } from '@angular/core';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor() {}
  note: string;
  notes: string[] = [];
  onenter() {
    this.notes.push(this.note);
  }
  ondelete(no) {
    this.notes.splice(this.notes.indexOf(no,1))
  }
}
