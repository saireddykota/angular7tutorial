import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app-comp1/app.component';
import { AppComp2Component } from './app-comp2/app-comp2.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { TempComponent } from './temp/temp.component';
import { UserListComponent } from './t30122018/user-list/user-list.component';
import { UserCreateComponent } from './t30122018/user-create/user-create.component';
import { UserEditComponent } from './t30122018/user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './t30122018/user.service';


const routes: Routes = [
  { path: '', redirectTo:'/', pathMatch: 'full'},
  { path: 'sai', component: AppComp2Component },
  // { path: 'users', component: UsersComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component: UserCreateComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    AppComp2Component,
    UsersComponent,
    TempComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
 ],
  exports: [ 
    RouterModule 
  ],
  providers: [DataService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
