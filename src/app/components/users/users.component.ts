import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallsService } from 'src/app/services/api-calls.service';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  usersData = [];
  searchText;
  config;
  showSort = [false];
  constructor(
    private router: Router,
    private apiCalls: ApiCallsService,
    private sortBy: SortService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.usersData.length,
    };
  }
  getUsers() {
    this.apiCalls.getUsers().subscribe((item) => {
      console.log(item);
      this.usersData = item;
      this.config.totalItems = this.usersData.length;
    });
  }
  addUser() {
    this.router.navigate(['/addUser']);
  }
  deleteUser(user, index) {
    this.apiCalls.deleteUser(user.id).subscribe((res) => {
      this.getUsers();
    });
  }
  onEdit(id: number) {
    this.router.navigate(['/editUser', id]);
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }

  sortTable(orderBy, columnName, order, flag) {
    this.showSort[order] = !this.showSort[order];
    this.usersData.sort(this.sortBy.dynamicSort(columnName, flag));
  }
}
