import { Component } from "@angular/core";

@Component({
    selector: 'app-bone-breaker-demo',
    standalone: false,
    templateUrl: './bone-breaker-demo.component.html',
    styleUrl: './bone-breaker-demo.component.scss'
})
export class BoneBreakerDemoComponent {
    protected isLoading = true;

    protected onLoaded() {
        this.isLoading = false;
    }
}