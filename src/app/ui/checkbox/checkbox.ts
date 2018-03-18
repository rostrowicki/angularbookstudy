import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngc-checkbox',
    templateUrl: './checkbox.html',
})
export class Checkbox {
    @Input() label;
    @Input() checked;
    @Output() checkedChange = new EventEmitter();

    onCheckedChanged(checked: any): void {
        this.checkedChange.next(checked);
    }
}