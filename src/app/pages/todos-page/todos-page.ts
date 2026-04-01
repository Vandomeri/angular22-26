import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos-page',
  imports: [FormsModule],
  templateUrl: './todos-page.html',
  styleUrl: './todos-page.css',
})
export class TodosPage {
  newTodo = signal('')

  todos = signal([
    { id: 1, text: "Купить молоко" },
    { id: 2, text: "Убраться в доме" },
  ])

}
