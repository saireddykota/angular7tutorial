import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  interpolation='interpolationN';
  person = ''
  nums = [];
  nums2 = [];

  loadData() {
    this.nums = this.myservice.getUsers();
    this.nums2 = this.myservice.getUsersSAME();
  }
  
  constructor(
    private myservice: DataService
  ) {
    this.loadData();
  }

  addPerson(){
    this.myservice.AddUser(this.person);
    this.loadData();
    this.person = '';
  }

  removePerson(i){
    this.myservice.removeUser(i);
    this.loadData();

  }

}
  