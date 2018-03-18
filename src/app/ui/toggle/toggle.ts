import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'ngc-toggle',
    templateUrl: './toggle.html'
})
export class Toggle implements OnInit {
    @Input() buttonList;
    @Input() selectedButton;
    @Output() selectedButtonChange = new EventEmitter();

    ngOnInit() {
        if (this.selectedButton === undefined ) {
            this.selectedButton = this.buttonList[0];
        }
    }

    onButtonActivate(button: any): void {
        this.selectedButton = button;
        this.selectedButtonChange.next(button);
    }
}