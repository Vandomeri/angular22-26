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
    { id: 1, text: "Купить молоко", completed: false },
    { id: 2, text: "Убраться в доме", completed: true },
  ])


  deleteTodo(id: number) {
    this.todos.update(todosOld => todosOld.filter(item => item.id !== id))
  }

  addTodo() {
    this.todos.update(oldTodos => [...oldTodos, { id: Date.now(), completed: false, text: this.newTodo() }])
    this.newTodo.set('')
  }

  editTodo() {

  }

}
