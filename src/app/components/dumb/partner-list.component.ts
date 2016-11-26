import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'partner-list',
    template: `
        <md-list>
            <md-list-item *ngFor="let partner of partners">
                <md-icon md-list-avatar>group</md-icon>
                <h4 md-line> {{partner.name}} </h4>
                <small md-line> {{partner.pid}} </small>
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
        font-size: 40px;
    }
    `]
})
export class PartnerList {
    @Input() partners;
}