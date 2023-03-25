import { Component } from '@angular/core';

@Component({
   selector: 'employee-app',
   template: `
      <nav class='navbar navbar-expand navbar-bg'>
         <ul class='nav nav-pills'>
            <li><a class='nav-link' routerLinkActive='active' [routerLinkActiveOptions]="{exact: true}" [routerLink]="['/employees']">Employee List</a></li>
            <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/create-employee']">Create Employee</a></li>
            <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/update-employee/:id']">Update Employee</a></li>
            <li><a class='nav-link' routerLinkActive='active' [routerLink]="['employee-details/:id']">Employee Details</a></li>
            <li><a class='nav-link' routerLinkActive='active' [routerLink]="['employee-csv']">Employee CSV upload</a></li>
          </ul>
      </nav>
      <div class="container">
         <router-outlet></router-outlet>
      </div>
   `
})
export class AppComponent {
  title = 'angular-phs340b';
}
