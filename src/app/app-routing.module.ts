import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { AboutComponent } from './components/about/about.component';
import { TodoComponent } from './components/todo/todo.component';

const routes: Routes = [
  {
    path: 'add',
    component: AddtodoComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    component: TodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
