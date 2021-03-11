import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryService implements InMemoryDbService{

  constructor() { }
  createDb() {
    let users = [
      { id: 1, firstName: 'krish', lastName: 'siva', mobileNumber: '9898989898', email : 'krish@gmail.com' },
      { id: 2, firstName: 'prasad', lastName: 'rao', mobileNumber: '9876543213', email : 'siva@gmail.com' },
      { id: 3, firstName: 'pintu', lastName: 'chin', mobileNumber: '912345678', email : 'pintu@gmail.com' },
      { id: 4, firstName: 'sumanth', lastName: 'manguluru', mobileNumber: '812345678', email : 'sumanth@gmail.com' },
    ];
    return {users};
  }
}
