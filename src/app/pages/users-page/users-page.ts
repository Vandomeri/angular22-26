import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink } from "@angular/router";
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { BeautifyPipe } from '../../pipes/beautify-pipe';

@Component({
  selector: 'app-users-page',
  imports: [RouterLink, BeautifyPipe, UpperCasePipe, AsyncPipe],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage {

  private userService = inject(UserService)

  users = this.userService.getUsers()

  types = [
    'in_app',
    'push_notifications'
  ]


}
