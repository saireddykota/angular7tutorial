import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor() { }

  students = ['sai', 'chandan'];

  persons = [];

  ngOnInit() {
    this.logMe();
  }

  logMe() {
    console.log("---------------------------------");
    console.log("this.persons", this.persons);
    console.log("this.students", this.students);
  }

  Action01() {
    // this.persons = this.students;
    this.persons = [...this.persons,...this.students];
    this.logMe();
  }

  Action02() {
    this.persons.push('readdy');
    this.logMe();
  }
}
