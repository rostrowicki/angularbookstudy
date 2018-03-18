import { Component } from '@angular/core';
import { TaskListService } from './task-list.service';

@Component({
    selector: 'ngc-task-list',
    templateUrl: 'task-list.component.html',
    providers: [ TaskListService ]
})
export class TaskListComponent {
    taskFilterList: string[] = ['all', 'open', 'done'];
    selectedTaskFilter: string = 'all';

    _taskListService: TaskListService;
    
    constructor(taskListService: TaskListService) {
        this._taskListService = taskListService;        
    }

    addTask(title: string): void {
        this._taskListService.tasks.push({
            title, 
            done: false,
        });
    }

    getFilteredTasks() {
        return this._taskListService.tasks.filter( (task) => {
            if (this.selectedTaskFilter === 'all') {
                return true;
            } else if (this.selectedTaskFilter === 'open') {
                return !task.done;
            } else {
                return task.done;
            }
        }
    );
    }
}