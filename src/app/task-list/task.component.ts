import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'ngc-task',
    templateUrl: './task.component.html',
})
export class TaskComponent {
    @Input() task;

    @HostBinding("class.task--done")
    get done() {
        return this.task && this.task.done;
    }
}