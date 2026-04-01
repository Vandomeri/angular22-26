import { Routes } from '@angular/router';
import { IndexPage } from './pages/index-page/index-page';
import { UsersPage } from './pages/users-page/users-page';
import { TodosPage } from './pages/todos-page/todos-page';

export const routes: Routes = [
    { path: '', component: IndexPage },
    { path: 'users', component: UsersPage },
    { path: 'todos', component: TodosPage }
];
