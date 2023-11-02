import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UseresService {
  constructor() {}

  private useresList: { name: string; status: string }[] = [
    { name: 'Oskar', status: 'active' },
    { name: 'Maciej', status: 'inactive' },
  ];

  changeStatusUser(user: { name: string, status: string }): void {
    user.status = user.status === 'active' ? 'inactive' : 'active';
    console.log(user);
    console.log(this.useresList);
  }

  getDataActiveUsers(): { name: string; status: string; }[] {
    return this.useresList.filter(user => user.status === 'active')
  }

  getDataInactiveUsers() {
    return this.useresList.filter(user => user.status === 'inactive')
  }
}
