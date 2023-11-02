import { Component } from '@angular/core';
import { UseresService } from '../useres.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users;

  constructor(private useresService: UseresService) {
    this.users = this.useresService.getDataActiveUsers();
  }

  changeStatus(user: {name: string; status: string;}) {
    this.useresService.changeStatusUser(user);
  }
}
