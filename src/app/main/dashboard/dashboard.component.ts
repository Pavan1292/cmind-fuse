import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cards = cards ;
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {

  }
}

const cards = [
  { name : 'Driving Licence',
    expiry : 10-27-2018,
    details : 'Details About Document'},
    { name : 'Driving Licence',
    expiry : 10-27-2018,
    details : 'Details About Document'},
    { name : 'Driving Licence',
    expiry : 10-27-2018,
    details : 'Details About Document'},
    { name : 'Driving Licence',
    expiry : 10-27-2018,
    details : 'Details About Document'}
];
