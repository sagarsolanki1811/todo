import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css'],
})
export class AddtodoComponent implements OnInit {
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}
  ngOnInit(): void {}
  message: string = '';
  addForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    desc: ['', Validators.required],
  });

  openSnackBar(val: string, action: string) {
    if (this.addForm.valid) {
      this.message = 'Form submitted';
      this.snackBar.open(this.message, action);
    } else {
      this.message = 'Please fill the form';
      this.snackBar.open(this.message, action);
    }
  }

  onSubmit() {
    if (this.addForm.valid) {
      var oldData = JSON.parse(localStorage.getItem('todos') || '[]');
      var lastId = oldData.length + 1;
      let data = {
        id: lastId,
        title: this.addForm.value.title,
        desc: this.addForm.value.desc,
        isActive: true,
      };
      oldData.push(data);
      localStorage.setItem('todos', JSON.stringify(oldData));
      this.addForm.reset();
    }
  }
}
