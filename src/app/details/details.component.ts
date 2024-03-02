import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  displayDetails = false;
  logs: string[] = [];

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    const timestamp = new Date().toLocaleString();
    this.logs.push(`Button clicked at ${timestamp}`);
  }
}
