import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-single-user-page',
  imports: [],
  templateUrl: './single-user-page.html',
  styleUrl: './single-user-page.css',
})
export class SingleUserPage implements OnInit {

  private route = inject(ActivatedRoute)
  private userService = inject(UserService)

  userId = this.route.snapshot.paramMap.get('id')
  user = signal<User | null>(null)

  ngOnInit(): void {
    if (this.userId)
      this.userService.getUserByID(this.userId).subscribe(data => {
        this.user.set(data)
      })
  }

}
