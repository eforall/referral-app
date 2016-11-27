import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'partner-select',
    template: `
        <select (change)="change($event.target.value);">
            <option [selected]="currentId==undefined"></option>
            <option *ngFor="let partner of partners"
                    value ="{{partner.pid}}"
                    [selected]="(partner.pid==currentId) ? true : null"
                    >{{partner.name}}</option>
        </select>
    `,
    styles: [`
    `]
})
export class PartnerSelect {
    @Input() partners;
    @Input() currentId;
    @Output() newValue = new EventEmitter();

    change = (pid) => {
        this.newValue.emit(pid);
    }
}