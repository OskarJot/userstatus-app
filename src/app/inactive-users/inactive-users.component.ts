import { Component } from '@angular/core';
import { UseresService } from '../useres.service';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users;
  constructor(private useres: UseresService) {
    this.users = this.useres.getDataInactiveUsers();
  }
}
