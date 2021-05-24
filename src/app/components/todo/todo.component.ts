import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  localtodos: any;
  data: any = [];
  constructor() {
    this.localtodos = localStorage.getItem('todos');
    if (this.localtodos == null) {
      this.data = [];
    } else {
      this.data = JSON.parse(this.localtodos);
    }
  }
  ngOnInit(): void {}

  delete(id: number) {
    var removeIndex = this.data
      .map(function (item: any) {
        return item.id;
      })
      .indexOf(id);
    this.data.splice(removeIndex, 1);
    localStorage.setItem('todos', JSON.stringify(this.data));
  }

  done(id: number) {
    var removeIndex = this.data
      .map(function (item: any) {
        return item.id;
      })
      .indexOf(id);
    this.data[removeIndex].isActive = !this.data[removeIndex].isActive;
    localStorage.setItem('todos', JSON.stringify(this.data));
  }
}
