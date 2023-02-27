import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { faCheck, faWindowClose, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons'
import { ToDo } from 'src/app/models/todo.model';

interface InputData {
  task: ToDo
}

interface OutputData {
  response: boolean
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit {

  faWindowClose = faWindowClose;
  faCheck = faCheck;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;
  task: ToDo;

  constructor(private dialogRef: DialogRef<OutputData> /**tipo de dato que se va a retornar */,
    @Inject(DIALOG_DATA) data: InputData /**tipo de dato que se va a recibir */) {
    this.task = data.task;
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close({
      response: true
    })
  }
}
