import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [];

  constructor(
    private service: UserService
  ) { }

  ngOnInit() {
    this.service.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }
  

}
