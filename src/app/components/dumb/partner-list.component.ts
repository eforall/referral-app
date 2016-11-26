import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'partner-list',
    template: `
        <md-list>
            <md-list-item *ngFor="let partner of partners">
                <h6 md-line> {{partner.name}} </h6>
            </md-list-item>
        </md-list>
    `
})
export class PartnerList {
    @Input() partners;
}