import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() todos: any;
  @Output() deleteId = new EventEmitter<number>();
  @Output() doneId = new EventEmitter<number>();

  delete(id: number) {
    this.deleteId.emit(id);
  }

  done(id: number) {
    console.log(id);
    this.doneId.emit(id);
  }
}
