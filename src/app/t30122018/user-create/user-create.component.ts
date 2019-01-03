import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  
  userModel = {
    name : '',
    location : ''
  };
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }

  saveUser() {
    this.service.addUser(this.userModel).subscribe((response: any) => {
      if( response.id > 0) {
        // alert('user successfully created...');
        this.router.navigate(['users']);
      }
    });
  }

}
