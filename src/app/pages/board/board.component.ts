import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [`
  .cdk-drop-list-dragging .cdk-drag {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }

/* Animate an item that has been dropped. */
  .cdk-drag-animating {
   transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }`]
})
export class BoardComponent implements OnInit {

  todos: ToDo[] = [
    {
      id: '1',
      title: 'task 1'
    },
    {
      id: '2',
      title: 'task 2'
    },
    {
      id: '3',
      title: 'task 3'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>) {
    console.info(this.todos)
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }
}
