import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngc-enter-task',
    templateUrl: './enter-task.component.html',
})
export class EnterTaskComponent {
    @Output() taskEntered = new EventEmitter();

    enterTask(titleInput: any): void {
        this.taskEntered.next(titleInput.value);        
        titleInput.value = '';
        titleInput.focus();
    }
}