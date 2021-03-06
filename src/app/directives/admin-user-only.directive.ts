import { HostBinding, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Directive, ElementRef, Renderer } from '@angular/core';

import { StoreService } from '../store/store.service';

@Directive({
  selector: '[admin-user-only]'
})
export class AdminUserOnlyDirective implements AfterViewInit, OnDestroy {

    private user$;

    constructor(private store: StoreService,
                private renderer: Renderer,
                private el: ElementRef) {
    }


    ngAfterViewInit() {

        this.renderer.setElementAttribute(this.el.nativeElement, "disabled", "disabled");

        this.user$ = this.store.select(store => store.user).subscribe((user) => {
            if (user && !!user.admin) this.renderer.setElementAttribute(this.el.nativeElement, "disabled", null);
            else this.renderer.setElementAttribute(this.el.nativeElement, "disabled", "disabled");
        });
    }

    ngOnDestroy() {
        this.user$.unsubscribe();
    }

}