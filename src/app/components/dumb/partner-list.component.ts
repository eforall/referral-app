import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'partner-list',
    template: `
        <md-list>
            <md-list-item *ngFor="let partner of partners">
                <md-icon md-list-avatar>group</md-icon>
                <h2 md-line title="{{partner.pid}}"> {{partner.name}} </h2>
            </md-list-item>
        </md-list>
    `,
    styles: [`
    small[md-line] {
        color: #999;
        font-size: 6px;
    }
    .material-icons {
        color: #BBB;
        font-size: 30px;
    }
    `]
})
export class PartnerList {
    @Input() partners;
}