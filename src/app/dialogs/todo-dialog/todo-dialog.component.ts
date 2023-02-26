import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { faCheck, faWindowClose, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons'


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

  constructor(private dialogRef: DialogRef) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }
}
