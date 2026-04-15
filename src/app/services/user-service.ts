import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private http = inject(HttpClient)

  getUsers() {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
      retry(3),
      map(data => data.filter(item => item.id < 6))
    )
  }

  getUserByID(id: string) {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }


}
