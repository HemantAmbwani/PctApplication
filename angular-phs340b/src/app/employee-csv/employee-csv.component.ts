import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-employee-csv',
  templateUrl: './employee-csv.component.html',
  styleUrls: ['./employee-csv.component.css']
})
export class EmployeeCsvComponent {
  data: any[] = [];
  columns: any[] = [];
  papa: Papa;

  onFileSelected(event: any) {
    const files = event.target.files;
    const file = files[0];
    this.papa.parse(file, {
      header: true,
      complete: (result) => {
        this.columns = result.meta.fields;
        this.data = result.data;
      }  
    });
  }  
}

