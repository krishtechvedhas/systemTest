import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallsService } from 'src/app/services/api-calls.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],
})
export class AddUsersComponent implements OnInit {
  usersData = [];
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: number;
  updateButton: boolean;
  buttonText: string;
  id: number;
  constructor(
    private router: Router,
    private apiCalls: ApiCallsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.route.paramMap.subscribe((param) => {
      if (param.has('id')) {
        this.updateButton = true;
        this.buttonText = 'Update'
         this.id = +param.get('id');
        this.getUserById(this.id);
      } else {
        this.buttonText = 'Add'
        this.updateButton = false;
      }
    });
  }
  getUserById(id: number) {
    this.apiCalls.getUserById(id).subscribe((res) => {
      this.firstName = res.firstName,
        this.lastName = res.lastName,
        this.mobileNumber = res.mobileNumber,
        this.email = res.email;
    });
  }
  updateUserData(id: number) {
    const json = {
      id: id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      mobileNumber: this.mobileNumber,
    };
    this.apiCalls.updateUser(json, id).subscribe((res) => {
      this.router.navigate(['/users']);
    });
  }

  onSubmit(userForm) {
    (<any>Object).values(userForm.controls).forEach((control) => {
      control.markAsTouched();
    });

 if (userForm.valid) {
   debugger
    if (this.updateButton) {
      this.updateUserData(this.id)
    } else {
      const json = {
        id: Math.floor((Math.random() * 100) + 1),
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        mobileNumber: this.mobileNumber,
      };
      this.apiCalls.saveUser(json).subscribe((res) => {
        this.router.navigate(['/users']);
      });
    }
    }
  }
  getUsers() {
    this.apiCalls.getUsers().subscribe((item) => {
      this.usersData = item;
     })
  }
}
