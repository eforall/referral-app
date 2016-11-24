import { HostBinding, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Directive, ElementRef, Renderer } from '@angular/core';

import { AuthService } from '../firebase';

@Directive({
  selector: '[admin-user-only]'
})
export class AdminUserOnlyDirective implements AfterViewInit, OnDestroy {

    private user$;

    constructor(private auth: AuthService,
                private renderer: Renderer,
                private el: ElementRef) {
    }


    ngAfterViewInit() {
        console.log("AdminUserOnlyDirective.ngAfterViewInit");

        this.renderer.setElementAttribute(this.el.nativeElement, "disabled", "disabled");

        this.user$ = this.auth.user.subscribe((user) => {
            if (user && !!user.admin) this.renderer.setElementAttribute(this.el.nativeElement, "disabled", null);
            else this.renderer.setElementAttribute(this.el.nativeElement, "disabled", "disabled");
        });
    }

    ngOnDestroy() {
        console.log("AdminUserOnlyDirective.ngOnDestroy");
        this.user$.unsubscribe();
    }

}