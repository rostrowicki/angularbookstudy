import { Injectable } from '@angular/core';
import { TaskComponent } from './task.component';

@Injectable()
export class TaskListService {
    tasks: any[];
    
    constructor() {
        this.tasks = [
            {title: 'Task 1', done: false},
            {title: 'Task 2', done: false},
            {title: 'Task 3', done: true},
            {title: 'Task 4', done: false},
        ]
    }
}