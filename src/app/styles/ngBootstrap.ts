import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        NgbPaginationModule
    ],
    exports: [
        NgbAlertModule
    ],
})
export class BootstrapModule { }
